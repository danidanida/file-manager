import process from 'process';

const printCurrentWorkingDirectory = () => {
  console.log(`You are currently in ${process.cwd()}`);
}

export { printCurrentWorkingDirectory };