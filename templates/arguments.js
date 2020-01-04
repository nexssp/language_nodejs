var path = require("path");
var scriptName = path.basename(process.argv[1]);

if (process.argv.indexOf("--help") > -1 || process.argv.indexOf("-h") > -1) {
  console.log(`Usage: ${scriptName}`);
  process.exit();
}

module.exports.getArg = (arg, def) => {
  const templateArg = process.argv.indexOf(arg) >= 0;
  if (templateArg) {
    return process.argv[templateArg + 1];
  }

  return def;
};
