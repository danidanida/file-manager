const retrieveUserName = () => {
    try {
        const arg = process.argv.slice(2);
        let name = arg[0].replace(/^.*=/, '');
        return name;
    } catch (err) {
        throw new Error("Error happened. Please type your name in format --username={{name}}")
    }

};

export { retrieveUserName };