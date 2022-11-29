const express = require('express');
//get the movie model
const Movie = require("../models/movies");

const getMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        res.send(movies);
    } catch (error) {
        next(error);
    }
};

module.exports = {getMovies};