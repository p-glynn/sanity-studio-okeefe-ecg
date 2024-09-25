import {readFile} from 'fs/promises';
import {writeData} from './writeData';
import {XMLParser} from 'fast-xml-parser';
import {dict, mediaProperties} from '../constants';

type InputType = keyof typeof dict;

async function processQuestions(inputType: InputType, fullOrTest: string) {
    console.log(`Processing questions for ${inputType}...`);
    const parser = new XMLParser();

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

        const parsedExplanation = parser.parse(explanation);
        const textBlocks = [];
        const deprecatedBlocks = [];
        for (const key in parsedExplanation) {
            if (Object.prototype.hasOwnProperty.call(parsedExplanation, key)) {
                const value = parsedExplanation[key];
                if (key === 'h2') {
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
                    const listType = key === 'ol' ? 'number' : 'bullet';

                    value.li.forEach((item: string) => {
                        deprecatedBlocks.push({
                            _type: 'block',
                            listItem: listType,
                            children: [
                                {
                                    _type: 'span',
                                    text: item,
                                },
                            ],
                        });
                    });
                } else {
                    textBlocks.push({
                        _type: 'block',
                        children: [
                            {
                                _type: 'span',
                                text: value,
                            },
                        ],
                    });
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
            } else {
                const outputKey = translationDict[key as keyof typeof translationDict];
                if (typeof value === 'object' && value !== null && 'points' in value) {
                    restOutProps[outputKey] = parseInt((value as {points: any}).points);
                }
            }
        });
        return {
            _id: `${id}`,
            _type: question_type,
            index,
            questionType: question_type,
            title,
            text: textBlocks,
            legacyId: id,
            secondaryText: secondary_text,
            correctAnswersDeprecated: deprecatedBlocks,
            ...restOutProps,
        };
    });

    // finish processing
    writeData({data: output}, 'input/questions/processed', inputType);
    console.log(`Finished processing questions for ${inputType}`);
}

function main() {
    const args = process.argv.slice(2);
    const inputType = args[0] as InputType;
    const fullFetch = args[1] || 'test';
    processQuestions(inputType, fullFetch);
}

main();
