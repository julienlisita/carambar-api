// index.js

require("dotenv").config();
const app = require("./app");
const seed = require("./seed");
const config = require("./config/config");

const start = async () => {
  if (config.seed === true) {
    await seed();
  }
}

const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

start();