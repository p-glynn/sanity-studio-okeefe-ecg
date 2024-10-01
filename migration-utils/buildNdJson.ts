import {readFile, appendFile, unlink} from 'fs/promises';
import {stringify} from 'ndjson';

async function main() {
    const args = process.argv.slice(2);
    const inputType = args[0];
    const file = await readFile(`input/questions/processed/${inputType}.json`, 'utf8');
    const {data} = JSON.parse(file);
    try {
        await unlink(`output/questions/${inputType}.ndjson`);
    } catch (error) {
        console.log('No file to delete');
    }
    const stream = stringify();
    stream.on('data', async function (line: string) {
        // line is a line of stringified JSON with a newline delimiter at the end
        await appendFile(`output/questions/${inputType}.ndjson`, line);
    });
    data.forEach((question: any) => stream.write(question));
    console.log(`Finished writing to file ${inputType}.ndjson`);
    stream.end();
}

main();
