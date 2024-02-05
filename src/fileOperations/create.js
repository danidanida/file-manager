import { promises as fs } from 'fs';
import path from 'path';

const create = async (fileName) => {
    const currentDirectory = process.cwd();
    const pathToNewFile = path.resolve(currentDirectory, fileName);
    try {
        await fs.writeFile(pathToNewFile, "");
    } catch (error) {
        console.log("Operation failed.")
    }

};

export { create };