import fs from 'fs';
import path from 'path';

const copy = (srcFile, destDir) => {
    const srcFilePath = path.resolve(srcFile);
    const destFilePath = path.resolve(destDir, path.basename(srcFile));

    fs.createReadStream(srcFilePath)
        .pipe(fs.createWriteStream(destFilePath))
        .on('error', error => console.error("Copy operation failed."));
};

export { copy };