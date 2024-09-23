import {readFile, writeFile} from 'fs/promises';
import {join} from 'path';

interface InputData {
    id: string;
    label: string;
}

interface Group extends InputData {
    data: InputData[];
}

interface Field {
    name: string;
    type: string;
    title: string;
    fieldset: string;
}

interface Fieldset {
    name: string;
    title: string;
    options: {collapsible: boolean; collapsed: boolean};
}

/**
 * Write data to its own JSON file.
 * @param {Object} inputData - JSON data to write to file
 * @param {string} subdirectory - name of the subdirectory to write to
 * @param {string} fileName - name of the file
 */
async function writeData(inputData: object, subdirectory: string, fileName: string) {
    const filePath = join('output', subdirectory, `${fileName}.json`);
    console.log(`Writing ${filePath}...`);

    const dataToWrite = JSON.stringify(inputData, null, 2);
    try {
        await writeFile(filePath, dataToWrite);
        console.log(`Finished writing ${filePath}`);
    } catch (error) {
        console.error(`Error writing file: ${error}`);
    }
}

async function main() {
    const args = process.argv.slice(2); // Ignore the first two arguments (node and script path)
    const inputType = args[0];
    if (!inputType) {
        console.error('Please provide an input type');
        process.exit(1);
    }

    const file = await readFile(`input/fields/${inputType}.json`, 'utf8');

    const {groups}: {groups: Group[]} = JSON.parse(file);

    const fields: Field[] = [];
    const fieldsets: Fieldset[] = [];

    groups.forEach(({id, label, data}: Group) => {
        fieldsets.push({
            name: id,
            title: label,
            options: {collapsible: true, collapsed: true},
        });
        const fieldsetID = id;
        data.forEach(({id, label}: InputData) => {
            fields.push({
                name: id,
                type: 'number',
                title: label,
                fieldset: fieldsetID,
            });
        });
    });
    await writeData({fields}, 'fields', inputType);
    await writeData({fieldsets}, 'fieldsets', inputType);
}

main();
