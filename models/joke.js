// models/Joke.js

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Joke", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};