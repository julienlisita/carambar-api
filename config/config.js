// config/config.js

require("dotenv").config();

module.exports = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  seed: process.env.SEED === "true",

  db: {
    dialect: "sqlite",
    storage: "./data/database.sqlite",
    logging: false,
  },
};