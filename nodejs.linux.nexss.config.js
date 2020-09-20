let languageConfig = Object.assign({}, require("./nodejs.win32.nexss.config"));

let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}

languageConfig.compilers = {
  node: {
    install: `${sudo}apt install nodejs`, // but this is installed already.
    command: "node",
    args: "<file>",
    help: ``,
  },
};

if (require("fs").existsSync(`${process.env.NEXSS_SRC_PATH}/lib/osys.js`)) {
  const {
    replaceCommandByDist,
    dist,
  } = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

  // This function just replace all apt-get,apt to the right distribution pkg installer.
  languageConfig.compilers.node.install = replaceCommandByDist(
    languageConfig.compilers.node.install
  );

  languageConfig.dist = dist();
}

module.exports = languageConfig;
