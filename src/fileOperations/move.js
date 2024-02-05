import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';

const move = async (srcFile, destDir) => {
    const srcFilePath = path.resolve(srcFile);
    const destFilePath = path.resolve(destDir, path.basename(srcFile));

    const readStream = fs.createReadStream(srcFilePath);
    const writeStream = fs.createWriteStream(destFilePath);

    readStream.pipe(writeStream);

    readStream.on('error', (error) => {
        console.error("Operation failed.");
    });

    writeStream.on('error', (error) => {
        console.error("Operation failed.");
    });

    readStream.on('end', () => {
        fsPromises.unlink(srcFilePath)
            .catch((error) => {
                console.error("Operation failed.");
            });
    });
};


export { move };