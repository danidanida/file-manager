import readline from 'readline';
import { retrieveUserName } from './src/retrieveUserName.js';
import { printCurrentWorkingDirectory, changeDirectory, listDirectoryContents } from './src/directoryOperations/index.js'
import { read, create, rename, remove } from './src/fileOperations/index.js'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let userName = retrieveUserName();
const greetingsMsg = `Welcome to the File Manager, ${userName}!`;
const goodByeMsg = `Thank you for using File Manager, ${userName}, goodbye!`;

console.log(greetingsMsg);
printCurrentWorkingDirectory();

 const handleInput = async (input) => {
    switch (input) {
        case '.exit':
            rl.close();
            break;
        case 'up':
            const successUp = changeDirectory('..');
            if (successUp) {
                printCurrentWorkingDirectory();
            }
            break;
        case 'ls':
            listDirectoryContents();
            break;
        default:
            if (input.startsWith('cd ')) {
                const targetPath = input.slice(3);
                const successCd = await changeDirectory(targetPath);
                if (!successCd) {
                    console.log("Failed to change directory.");
                } else {
                    printCurrentWorkingDirectory();
                }
            } else if (input.startsWith("cat ")) {
                const targetPath = input.slice(4).trim();
                read(targetPath);
                printCurrentWorkingDirectory();
            } else if (input.startsWith("add ")) {
                const newFileName = input.slice(4).trim();
                create(newFileName);
                printCurrentWorkingDirectory();
            } else if (input.startsWith("rn ")) {
                const args = input.slice(3).trim().split(/\s+/);
                if (args.length < 2) {
                    console.log("Operation failed.");
                } else {
                    const srcFileName = args[0];
                    const destFileName = args[1];
                    rename(srcFileName, destFileName);
                    printCurrentWorkingDirectory();
                }
            } else if (input.startsWith("rm ")) {
                const target = input.slice(3).trim();
                remove(target);
                printCurrentWorkingDirectory();
            } else {
                console.log("Invalid input.");
            }
    }
};

process.stdin.setEncoding('utf8');
rl.on('line', async (data) => {
    const input = data.trim();
    handleInput(input)
});

rl.on('SIGINT', () => {
    rl.close();
});

rl.on('close', () => {
    console.log(goodByeMsg);
    process.exit(0);
});