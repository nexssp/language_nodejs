let languageConfig = Object.assign({}, require("./nodejs.win32.nexss.config"));

let sudo = process.sudo;

languageConfig.compilers = {
  node: {
    install: `${sudo}pkg update && pkg install node12`, // but this is installed already.
    command: "node",
    args: "<file>",
    help: ``,
  },
  deno: {
    install:
      process.replacePMByDistro(`${sudo}apt-get install unzip`) +
      `
curl -fsSL https://deno.land/x/install/install.sh | sh`,
    command: "deno",
    args: "run <file>",
    help: ``,
    templates: "templates_deno",
  },
};

const distro = process.distro;

// This function just replace all apt-get,apt to the right distribution pkg installer.
languageConfig.compilers.node.install = process.replacePMByDistro(
  languageConfig.compilers.node.install
);

languageConfig.dist = distro;

module.exports = languageConfig;
