import { promises as fs } from 'fs';
import path from 'path';

const rename = async (srcFile, destFile) => {
    const currentDirectory = process.cwd();
    const srcFilePath = path.resolve(currentDirectory, srcFile);
    const destinationFilePath = path.resolve(currentDirectory, destFile);
    try {
        await fs.rename(srcFilePath, destinationFilePath);
    } catch (error) {
        console.log("Operation failed.", error.message);
    }
};

export { rename };