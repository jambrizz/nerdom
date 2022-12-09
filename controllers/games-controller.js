const express = require('express');
//get the game model
const Game = require("../models/games");

/** GET requests */
const getGames = async (req, res, next) => {
    // #swagger.description = 'Get all games'
    try {
        const games = await Game.find();
        res.send(games);
    } catch (error) {
        next(error);
    }
};

const getGameById = async (req, res, next) => {
    // #swagger.description = 'Get one game based on ID'
    try {
        const game = await Game.findOne({ _id: req.params.id });
        res.send(game);
    } catch (error) {
        next(error);
    }
}

const getGameByTitle = async (req, res, next) => {
    // #swagger.description = 'Get one game based on title'
    try {
        const game = await Game.findOne({ title: req.params.title });
        res.send(game);
    } catch (error) {
        next(error);
    }
}

const getGamesByGenre = async (req, res, next) => {
    // #swagger.description = 'Get one game based on title'
    try {
        const games = await Game.find({ genre: req.params.genre });
        res.send(games);
    } catch (error) {
        next(error);
    }
}

/** POST requests */
const postGame = async (req, res) => {
    // #swagger.description = 'Post one game to the database'
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

module.exports = {getGames, postGame, getGameById, getGameByTitle, getGamesByGenre};