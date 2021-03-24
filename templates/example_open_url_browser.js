// Open browser with the url

var url = "http://nexss.com";
var start =
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
    ? "start"
    : "xdg-open";

require("child_process").exec(start + " " + url);
