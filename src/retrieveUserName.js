const retrieveUserName = () => {
    try {
        const arg = process.argv.slice(2);
        let name = arg[0].replace(/^.*=/, '');
        return name;
    } catch (err) {
        console.log("Operation failed. Please type your name in format --username={{name}}")
        return "default username"
    }

};

export { retrieveUserName };