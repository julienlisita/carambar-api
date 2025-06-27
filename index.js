// index.js

require("dotenv").config();
const app = require("./app");
const seed = require("./seeders/seed");
const config = require("./config/config");

const start = async () => {
  if (config.seed === true) {
    await seed();
  }
}

const PORT = config.port || 3000;
const baseUrl = process.env.API_URL || `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Server is running on ${baseUrl}`);
});

start();