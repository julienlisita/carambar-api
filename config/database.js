// config/database.js

const { Sequelize } = require("sequelize");
const config = require("./config");
const path = require("path");

const sequelize = new Sequelize({
  dialect: config.db.dialect,
  storage: path.join(__dirname, config.db.storage),
  logging: config.db.logging,
});

module.exports = sequelize;