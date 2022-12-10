const express = require('express');
const mongoose = require('mongoose');
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
    const game = new Game.updateOne({
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

/****PUT requests */
const putGame = async (req, res, next) => {
    // #swagger.description = 'Update one game in the database using the ID'
    try {
        const id = req.params.id;
        const putGame = await Game.updateOne({_id: id }, {$set: {
            title: req.body.title,
            genres: req.body.genres,
            developers: req.body.developers,
            publishers: req.body.publishers,
            creators: req.body.creators,
            platforms: req.body.platforms,
            prominent_chars: req.body.prominent_chars,
            actors: req.body.actors,
            description: req.body.description
        }});
        res.status(200).json(putGame);
    } catch (error){
        next(res.status(400).json(error));
    }
};

/** DELETE requests */
const deleteGame = async (req, res, next) => {
    // #swagger.description = 'Delete one game from the database using the ID'
    try{
        const id = req.params.id;
        const deleteGame = await Game.deleteOne({_id: id});
        res.status(200).json(deleteGame);
    } catch(error){
        next(res.status(500).json(error));
    }
};

module.exports = {getGames, postGame, getGameById, getGameByTitle, getGamesByGenre, putGame, deleteGame};