const express = require('express');
//get the game model
const Game = require("../models/games");

const getGames = async (req, res, next) => {
    try {
        const games = await Game.find();
        res.send(games);
    } catch (error) {
        next(error);
    }
};

const postGame = async (req, res) => {
    const game = new Game({
        title: req.body.title,
        genres: req.body.genres,
        developers: req.body.developers,
        publishers: req.body.publishers,
        creators: req.body.creators,
        platforms: req.body.platforms,
        prominent_chars: req.body.prominent_chars,
        actors: req.body.actors,
        description: req.body.description
    });
    await game.save();
    res.send(game);
};

module.exports = {getGames, postGame};