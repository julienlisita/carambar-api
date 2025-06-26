// routes/jokeRoutes.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Jokes route is working!");
});

module.exports = router;