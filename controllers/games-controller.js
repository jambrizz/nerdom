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

module.exports = {getGames};