// routes/jokeRoutes.js

const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

router.get("/", jokeController.getAllJokes);
router.get("/random", jokeController.getRandomJoke);
router.get("/:id", jokeController.getJokeById);
router.post("/", jokeController.createJoke);

module.exports = router;