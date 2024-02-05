import fs from 'fs';
import path from 'path';

const listDirectoryContents = () => {
    const currentDirectory = process.cwd();
    fs.readdir(currentDirectory, { withFileTypes: true }, (err, items) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }

        const files = [];
        const folders = [];

        items.forEach(item => {
            if (item.isDirectory()) {
                folders.push({ Name: item.name, Type: 'directory' });
            } else {
                files.push({ Name: item.name, Type: 'file' });
            }
        });

        const sortedItems = [...folders.sort((a, b) => a.Name.localeCompare(b.Name)), ...files.sort((a, b) => a.Name.localeCompare(b.Name))];

        console.table(sortedItems);
    });
};

export { listDirectoryContents };