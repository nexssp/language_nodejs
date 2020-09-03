let languageConfig = Object.assign({}, require("./nodejs.win32.nexss.config"));

languageConfig.compilers = {
  node: {
    install: "apt install nodejs", // but this is installed already.
    command: "node",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;
