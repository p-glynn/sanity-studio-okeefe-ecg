import {readFile, appendFile} from 'fs/promises';
import {stringify} from 'ndjson';

async function main() {
    const args = process.argv.slice(2);
    const inputType = args[0];
    const path = `questions/test/${inputType}`;
    const file = await readFile(`input/${path}.json`, 'utf8');
    const {data} = JSON.parse(file);

    const stream = stringify();
    stream.on('data', async function (line: string) {
        // line is a line of stringified JSON with a newline delimiter at the end
        await appendFile(`output/${path}.ndjson`, line);
    });
    data.forEach((question: any) => stream.write(question));
    stream.end();
}

main();
