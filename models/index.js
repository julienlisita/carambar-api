// models/index.js

const sequelize = require("../config/database");
const JokeModel = require("./joke");

const Joke = JokeModel(sequelize);

module.exports = {
  sequelize,
  Joke,
};