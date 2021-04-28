let languageConfig = Object.assign({}, require("./nodejs.win32.nexss.config"));

let sudo = process.sudo;

languageConfig.compilers = {
  node: {
    install: `${sudo}apt install nodejs`, // but this is installed already.
    command: "node",
    args: "<file>",
    help: ``,
  },
};

const distro = process.distro;

// This function just replace all apt-get,apt to the right distribution pkg installer.
languageConfig.compilers.node.install = process.replacePMByDistro(
  languageConfig.compilers.node.install
);

languageConfig.dist = distro;

module.exports = languageConfig;
