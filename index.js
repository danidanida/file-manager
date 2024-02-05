import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

import { retrieveUserName } from './src/retrieveUserName.js';
let userName = retrieveUserName();
const greetingsMsg = `Welcome to the File Manager, ${userName}!`;
const goodByeMsg = `Thank you for using File Manager, ${userName}, goodbye!`;

console.log(greetingsMsg);

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const input = data.trim();
  if (input === '.exit') {
    rl.close();
  }
});

rl.on('SIGINT', () => {
  rl.close();
});

rl.on('close', () => {
  console.log(goodByeMsg);
  process.exit(0);
});