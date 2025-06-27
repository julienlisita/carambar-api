// controllers/jokeController.js

const { Joke } = require("../models");
const handleError = require("../utils/handleError");

module.exports = {

  /* Retourne toutes les blagues. */
  async getAllJokes(req, res) {
    try {
      const jokes = await Joke.findAll();
      res.status(200).json(jokes);
    } catch (error) {
      handleError(res, error);
    }
  },

  /* Retourne une blague par son ID. */
  async getJokeById(req, res) {
    try {
      const joke = await Joke.findByPk(req.params.id);
      if (!joke) {
        return res.status(404).json({ error: "Blague non trouvée." });
      }
      res.status(200).json(joke);
    } catch (error) {
      handleError(res, error);
    }
  },

  /* Retourne une blague aléatoire. */
  async getRandomJoke(req, res) {
    try {
      const count = await Joke.count();
      const randomIndex = Math.floor(Math.random() * count);
      const joke = await Joke.findOne({ offset: randomIndex });
      res.status(200).json(joke);
    } catch (error) {
      handleError(res, error);
    }
  },

  /* Crée une nouvelle blague. */
  async createJoke(req, res) {
    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: "Champs 'question' et 'answer' requis." });
    }

    try {
      const newJoke = await Joke.create({ question, answer });
      res.status(201).json(newJoke);
    } catch (error) {
      handleError(res, error);
    }
  },
};