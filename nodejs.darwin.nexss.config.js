let languageConfig = Object.assign({}, require("./nodejs.win32.nexss.config"));
let sudo = process.sudo;
languageConfig.compilers = {
    node: {
        install: "brew install nodejs", // but this is installed already.
        command: "node",
        args: "<file>",
        help: ``,
    },
    deno: {
        install: process.replacePMByDistro(`${sudo}apt-get install unzip`) +
            `
curl -fsSL https://deno.land/x/install/install.sh | sh`,
        command: "deno",
        args: "run <file>",
        help: ``,
        templates: "templates_deno",
    },
};

module.exports = languageConfig;