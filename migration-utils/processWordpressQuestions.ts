import {readFile} from 'fs/promises';
import {writeData} from './writeData';
import {XMLParser} from 'fast-xml-parser';
import {dict, mediaProperties} from '../constants';

type InputType = keyof typeof dict;

interface QBankAnswer {
    value: string;
}

async function processQuestions(inputType: InputType, fullOrTest: string) {
    console.log(`Processing questions for ${inputType}...`);
    const parser = new XMLParser();

    const outputType = inputType === 'cv_image' ? 'qbank' : inputType;
    const translationDict = dict[inputType];
    const path = `${fullOrTest}/${inputType}`;

    const file = await readFile(`input/questions/${path}.json`, 'utf8');
    const {data} = JSON.parse(file);

    const output = data.map((question: any) => {
        const {id, question_title, question_type, explanation, secondary_text, ...restProps} = question;

        const [indexWithType, title] = question_title.split(': ');
        const index = indexWithType.split(' ')[1];
        const restOutProps: Record<string, any> = {
            images: [],
            markedImages: [],
            videos: [],
        };
        let parsedExplanation: {[key: string]: any} = {};
        try {
            parsedExplanation = parser.parse(escapeSpecificAngleBrackets(explanation));
        } catch (error) {
            console.log(id, error);
        }
        const textBlocks = [];
        const deprecatedBlocks = [];
        for (const key in parsedExplanation) {
            if (Object.prototype.hasOwnProperty.call(parsedExplanation, key)) {
                const value = parsedExplanation[key];
                if (key === 'h2') {
                    // correct answers headers
                    deprecatedBlocks.push({
                        _type: 'block',
                        style: key,
                        children: [
                            {
                                _type: 'span',
                                text: value,
                            },
                        ],
                    });
                } else if (key === 'ul' || key === 'ol') {
                    // correct answers list
                    const {li} = value;
                    const listType = key === 'ol' ? 'number' : 'bullet';

                    if (Array.isArray(li)) {
                        value.li.forEach((item: string) => {
                            const liBlock = generateTextBlock(item, listType);
                            deprecatedBlocks.push(liBlock);
                        });
                    } else {
                        const liBlock = generateTextBlock(li, listType);
                        deprecatedBlocks.push(liBlock);
                    }
                } else {
                    // answer explanation (store as text)
                    if (typeof value === 'string') {
                        const textBlock = generateTextBlock(value);
                        textBlocks.push(textBlock);
                    } else if (typeof value === 'object') {
                        for (const innerKey in value) {
                            if (Object.prototype.hasOwnProperty.call(value, innerKey)) {
                                if (innerKey === 'br') {
                                    continue;
                                } else if (innerKey === '#text') {
                                    textBlocks.push(generateTextBlock(value[innerKey]));
                                } else if (innerKey === 'ol' || innerKey === 'ul') {
                                    const listType = innerKey === 'ol' ? 'number' : 'bullet';
                                    const {li} = value[innerKey];
                                    if (Array.isArray(li)) {
                                        li.forEach((item: string) => {
                                            const textBlock = generateTextBlock(item, listType);
                                            deprecatedBlocks.push(textBlock);
                                        });
                                    } else {
                                        const textBlock = generateTextBlock(li, listType);
                                        deprecatedBlocks.push(textBlock);
                                    }
                                } else {
                                    if (typeof value[innerKey] === 'string') {
                                        const textBlock = generateTextBlock(value[innerKey]);
                                        if (innerKey === 'h2') {
                                            deprecatedBlocks.push(textBlock);
                                        } else {
                                            textBlocks.push(textBlock);
                                        }
                                    } else {
                                        const textBlock = generateTextBlock(value[innerKey]['#text']);
                                        textBlocks.push(textBlock);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        Object.entries(restProps).forEach(([key, value]) => {
            if (mediaProperties.includes(key)) {
                if (key.includes('marked')) {
                    restOutProps.markedImages.push({
                        _type: 'image',
                        _sanityAsset: `image@${value}`,
                    });
                } else if (key.includes('video')) {
                    restOutProps.videos.push({
                        _type: 'file',
                        _sanityAsset: `file@${value}`,
                    });
                } else {
                    restOutProps.images.push({
                        _type: 'image',
                        _sanityAsset: `image@${value}`,
                    });
                }
            } else if (key in translationDict) {
                const outputKey = translationDict[key as keyof typeof translationDict];
                if (outputType === 'qbank') {
                    if (key.includes('correct_answer')) {
                        const correctAnswers = value as QBankAnswer[];
                        restOutProps[outputKey] =
                            translationDict[correctAnswers[0].value as keyof typeof translationDict];
                    } else {
                        restOutProps[outputKey] = value;
                    }
                } else if (typeof value === 'object' && value !== null && 'points' in value) {
                    restOutProps[outputKey] = parseInt((value as {points: any}).points);
                }
            }
        });
        return {
            _id: `${id}`,
            _type: outputType,
            index,
            numericIndex: convertIndexToNumber(index),
            questionType: outputType,
            title: title.trim(),
            text: textBlocks,
            legacyId: id,
            secondaryText: secondary_text,
            correctAnswersDeprecated: deprecatedBlocks,
            ...restOutProps,
        };
    });

    // finish processing
    writeData({data: output}, 'input/questions/processed', outputType);
    console.log(`Finished processing questions for ${outputType}`);
}

function generateTextBlock(text: string, listType?: 'bullet' | 'number') {
    const output: {
        _type: string;
        children: {_type: string; text: string}[];
        listItem?: 'bullet' | 'number';
    } = {
        _type: 'block',
        children: [
            {
                _type: 'span',
                text,
            },
        ],
    };
    if (listType) {
        output.listItem = listType;
    }
    return output;
}

function escapeSpecificAngleBrackets(html: string) {
    // Replace angle brackets only when followed by a digit or space (to avoid replacing HTML tags)
    return html.replace(/<(?=[\d\ ])/g, '&lt;').replace(/>(?=[\d\ ])/g, '&gt;');
}

function convertIndexToNumber(index: string) {
    const numberPart = parseInt(index, 10); // Extract numeric part
    const letterPart = index.replace(/[0-9]/g, ''); // Extract letter part

    // If there's no letter part, return just the number
    if (!letterPart) {
        return numberPart;
    }

    // Convert letters to a decimal value (e.g., "A" -> 0.1, "B" -> 0.2)
    const letterValue = letterPart.toUpperCase().charCodeAt(0) - 65 + 1;
    return numberPart + letterValue / 10;
}
function main() {
    const args = process.argv.slice(2);
    const inputType = args[0] as InputType;
    const fullFetch = args[1] || 'test';
    processQuestions(inputType, fullFetch);
}

main();
