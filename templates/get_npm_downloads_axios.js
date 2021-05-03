const axios = require("axios");
const url =
  "https://api.npmjs.org/downloads/point//2021-01-01:2036-01-01/@nexssp/cli";

(async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log(error.response.body);
  }
})();
