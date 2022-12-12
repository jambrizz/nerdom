const express = require('express');
const mongoose = require('mongoose');
//get the movie model
const Movie = require("../models/movies");

/** GET requests */
const getMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        res.send(movies);
    } catch (error) {
        next(error);
    }
};

/** POST requests */
const postMovie = async (req, res) => {
    // #swagger.description = 'Post one game to the database'
    const movie = new Movie.updateOne({
        title: req.body.title,
        description: req.body.description,
        director: req.body.director,
        writers: req.body.writers,
        producers: req.body.producers,
        production_companies: req.body.production_companies,
        release_date: req.body.release_date,
        actors: req.body.actors,
        prominent_chars: req.body.prominent_chars,
        genres: req.body.genres,
        distribution: req.body.distribution
    });
    await movie.save();
    res.send(movie);
};

//PUT request
const putMovie = async (req, res, next) => {
    // #swagger.description = 'Update a movie based on ID'
    try {
        const id = req.params.id;
        const putMovie = await Movie.updateOne({_id: id}, {$set: {
            title: req.body.title,
            description: req.body.description,
            director: req.body.director,
            writers: req.body.writers,
            producers: req.body.producers,
            production_companies: req.body.production_companies,
            release_date: req.body.release_date,
            actors: req.body.actors,
            prominent_chars: req.body.prominent_chars,
            genres: req.body.genres,
            distribution: req.body.distribution
        }});
        res.status(200).json(putMovie);
    } catch(error){
        next(res.status(400).json(error));
    }
};

//DELETE request
const deleteMovie = async (req, res, next) => {
    // #swagger.description = 'Delete a movie based on ID'
    try{
        const id = req.params.id;
        const deleteMovie = await Movie.deleteOne({_id: id});
        res.status(200).json(deleteMovie);
    } catch(error){
        next(res.status(500).json(error));
    };
};

module.exports = {
    getMovies,
    postMovie,
    putMovie,
    deleteMovie
};