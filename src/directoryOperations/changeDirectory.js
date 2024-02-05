import fs from 'fs/promises';
import path from 'path';

const changeDirectory = async (targetDirectory) => {
    let currentDirectory = process.cwd();
    const newDirectory = path.resolve(currentDirectory, targetDirectory);

    try {
        const stats = await fs.stat(newDirectory);
        if (!stats.isDirectory()) {
            return false;
        }
        process.chdir(newDirectory);
        return true;
    } catch (error) {
        return false;
    }
};

export { changeDirectory };