import readline from 'readline';
import { printCurrentWorkingDirectory } from './src/printCurrWorkingDirectory.js';
import { retrieveUserName } from './src/retrieveUserName.js';
import { changeDirectory } from "./src/changeDirectory.js";
import { listDirectoryContents } from "./src/listDirectoryContent.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let userName = retrieveUserName();
const greetingsMsg = `Welcome to the File Manager, ${userName}!`;
const goodByeMsg = `Thank you for using File Manager, ${userName}, goodbye!`;

console.log(greetingsMsg);
printCurrentWorkingDirectory();

process.stdin.setEncoding('utf8');
rl.on('line', async (data) => {

    const input = data.trim();

    if (input === '.exit') {
        rl.close();
    }
    else if (input === 'up') {
        const success = changeDirectory('..');
        if (success) {
            printCurrentWorkingDirectory();
        }
    }
    else if (input.startsWith('cd ')) {
        const targetPath = input.slice(3);
        const success = await changeDirectory(targetPath);
        if (!success) {
            console.log("Failed to change directory.");
        } else {
            printCurrentWorkingDirectory();
        }
    } else if (input === 'ls') {
        listDirectoryContents();
    }

    else {
        console.log("Invalid input.");
    }
});

rl.on('SIGINT', () => {
    rl.close();
});

rl.on('close', () => {
    console.log(goodByeMsg);
    process.exit(0);
});