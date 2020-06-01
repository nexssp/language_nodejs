const express = require("express");
const app = express();

app.use("/css", express.static("css"));
app.use("/src", express.static("src"));
app.use("/", express.static("demo"));

app.listen(3696, () => console.log("App is served at port 3696!"));
