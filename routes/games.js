const router = require('express').Router();
//get the game model
const Game = require("../models/games");

//get all posts
router.get("/", async (req, res) => {
    const games = await Game.find();
    res.send(games);
});

module.exports = router;