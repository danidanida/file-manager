import { promises as fs } from 'fs';
import path from 'path';

const remove = async (target) => {

    const currentDirectory = process.cwd();
    const srcFilePath = path.resolve(currentDirectory, target);
    
    try {
        await fs.unlink(srcFilePath);
    } catch (error) {
        console.log("Operation failed.")
    }
};

export { remove };