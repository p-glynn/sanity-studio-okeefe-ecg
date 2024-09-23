import {writeFile} from 'fs/promises';
import {join} from 'path';

/**
 * Write data to its own JSON file.
 * @param {Object} inputData - JSON data to write to file
 * @param {string} path - name of the subdirectory to write to
 * @param {string} fileName - name of the file
 */
export async function writeData(inputData: object, path: string, fileName: string) {
    const filePath = join(path, `${fileName}.json`);
    console.log(`Writing ${filePath}...`);

    const dataToWrite = JSON.stringify(inputData, null, 2);
    try {
        await writeFile(filePath, dataToWrite);
        console.log(`Finished writing ${filePath}`);
    } catch (error) {
        console.error(`Error writing file: ${error}`);
    }
}
