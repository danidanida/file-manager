import { promises as fs } from 'fs';
import path from 'path';

const read = async (targetFile) => {
    const currentDirectory = process.cwd();
    const filePath = path.resolve(currentDirectory, targetFile);
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(data);
    } catch (error) {
        console.log("Operation failed.");
    }
};

export { read };