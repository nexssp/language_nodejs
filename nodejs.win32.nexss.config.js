let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "NodeJS";
languageConfig.description =
  "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.";
languageConfig.url = "https://nodejs.org";
languageConfig.founders = ["Ryan Dahl"];
languageConfig.developers = [
  "https://github.com/nodejs/node/blob/master/AUTHORS",
];
languageConfig.years = ["2009"];
languageConfig.extensions = [".js", ".mjs"];
languageConfig.licenses = [
  "MIT https://github.com/nodejs/node/blob/master/LICENSE",
];

languageConfig.editors = {
  vscode: {
    extensions: ["ms-vscode.node-debug2"],
  },
}; // defined in \.nexss\languages\config.win32.js (copy from .nexssCli\nexss-language\languages\)
languageConfig.run = "node -e";
languageConfig.printCommandLine = "node -p"; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "node -c";
languageConfig.interactiveShell = "node";
languageConfig.builders = {
  pkg: {
    install: "npm install -g pkg",
    command: "pkg",
    //build: "pkg --output <destinationFile> --out-path <destinationPath> <file>",
    build: "pkg",
    args: "--target host --output <destinationFile> <file>",
    help: ``,
  },
};
languageConfig.compilers = {
  bun: {
    install: "scoop install bun",
    command: "bun",
    args: "run <file>",
    help: ``,
  },
  node: {
    install: "scoop install nodejs-lts",
    command: "node",
    args: "<file>",
    help: ``,
  },
  deno: {
    install: "scoop install deno",
    command: "deno",
    args: "run <file>",
    help: ``,
    templates: "templates_deno",
  },
};
languageConfig.errors = require("./nexss.nodejs.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "installed.",
    messageAfterInstallation: null, // sometimes there is need of add something to the files can be add here eg php for composer.
    installed: "npm list",
    search: "npm search",
    install: "npm install",
    uninstall: "npm remove",
    help: "npm help",
    version: "npm --version",
    init: () => {
      const { existsSync } = require("fs");
      const { join } = require("path");
      const { execSync } = require("child_process");
      if (!existsSync(join(process.cwd(), "package.json"))) {
        console.log("Setup npm project");
        execSync("npm init -y");
        console.log("Setup npm project: done.");
      } else {
        console.log("npm project already initialized.");
      }

      if (!existsSync(join(process.cwd(), ".gitignore"))) {
        console.log("Creating .gitignore");
        execSync("npx gitignore node"); // creates tsconfig.json with all the descriptions
      } else {
        console.log(".gitignore is already setup");
      }
    },
    // if command not found in specification
    // run directly on package manager
    else: "npm",
  },
  yarn: {
    installation: "scoop install yarn",
    list: "yarn list",
    search: "yarn search",
    install: "yarn list",
    uninstall: "yarn remove",
    help: "yarn help",
    version: "yarn help",
  },
};

module.exports = languageConfig;
// console.log(languageConfig.get(`errors`));
// console.log(languageConfig.get("author"));
// console.log(Object.keys(languageConfig.get("osPackageManagers")));
// console.log(Object.keys(languageConfig.get("languagePackageManagers")));
