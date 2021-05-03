// additional info for templates like copy extra libraries.
// in this case library needs JSON
const config = {
  files: [],
  commands: [`cd "${process.cwd()}" && npm i @nexssp/ansi`],
  repos: [],
  descriptions: [""],
};

module.exports = config;
