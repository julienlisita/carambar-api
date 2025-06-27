// seed.js

const db = require("../models");
const jokes = require("./jokesData");

const seed = async () => {
  try {
    await db.sequelize.sync({ force: true });
    await db.Joke.bulkCreate(jokes);
    console.log(`${jokes.length} blagues insérées dans la base de données !`);
  } catch (err) {
    console.error(" Erreur seed:", err);
  }
};

module.exports = seed;