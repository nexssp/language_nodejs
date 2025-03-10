module.exports = {
  // Shared package errors
  "Cannot find module '(.*?)'": "nexss js install <package>",
  "Cannot resolve '(.*?)'": "nexss js install <package>",
  "Error: Cannot find module '(.*?)'": "nexss js install <package>",

  // Native dependencies issues
  "Cannot open include file: 'dns_sd.h'": `Do you have bonjour SDK installed? 
https://developer.apple.com/download/more/
(Remember to restart your computer after installation.)`,

  // Bun-specific reference errors
  "ReferenceError: Can't find variable: (.*?)\n":
    "Define '<found1>' before you use it.",

  // Specific match for Bun syntax errors
  'Expected ";" but found "."': "Did you forget semi-colon ';' ?",

  // Node.js reference errors
  "ReferenceError: (.*?) is not defined":
    "Define '<found1>' before you use it.",

  // Common JavaScript errors for both runtimes
  "Unexpected token": "Did you forget semi-colon ';' ?",
  "SyntaxError: (.*?)": "Check your syntax: <found1>",
  "TypeError: (.*?) is not a function":
    "<found1> is not a function. Check if it's properly imported/defined.",
  "TypeError: Cannot read properties of (undefined|null)":
    "Trying to access properties of undefined or null. Check your variables.",

  // Environment-specific errors
  "Error: ENOENT: no such file or directory":
    "File or directory not found. Check your paths.",
  "Cannot find adapter":
    "Install the required adapter: nexss js install <adapter-name>",
};
