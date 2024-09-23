import {readFile} from 'fs/promises';
import {writeData} from './writeData';
import {Group, InputData, Field, Fieldset} from './types/types';

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
