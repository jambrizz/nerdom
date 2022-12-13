const express = require('express');
const mongoose = require('mongoose');
//get the review model
const Show = require("../models/shows");

/** ALL GET REQUESTS */
const getShows = async (req, res, next) => {
    // #swagger.description = 'Get all shows'
    try {
        const shows = await Show.find();
        res.send(shows);
    } catch (error) {
        next(error);
    }
};

const getShowById = async (req, res, next) => {
    // #swagger.description = 'Get one show based on ID'
    try {
        const show = await Show.findOne({ _id: req.params.id });
        res.send(show);
    } catch (error) {
        next(error);
    }
};

/** ALL POST REQUESTS */
const postShow = async (req, res) => {
    // #swagger.description = 'Post one game to the database'
    const show = new Show({
        title: req.body.title,
        description: req.body.description,
        genres: req.body.genres,
        creators: req.body.creators,
        producers: req.body.producers,
        production_companies: req.body.production_companies,
        distributor: req.body.distributor,
        release_date: req.body.release_date,
        status: req.body.status,
        prominent_chars: req.body.prominent_chars,
        actors: req.body.actors,
    });
    await show.save();
    res.send(show);
};

//Put request
const putShow = async (req, res, next) => {
    // #swagger.description = 'Update one show based on ID'
    try{
        const id = req.params.id;
        const putShow = await Show.updateOne({_id: id}, {$set: {
            title: req.body.title,
            description: req.body.description,
            genres: req.body.genres,
            creators: req.body.creators,
            producers: req.body.producers,
            production_companies: req.body.production_companies,
            distributor: req.body.distributor,
            release_date: req.body.release_date,
            status: req.body.status,
            prominent_chars: req.body.prominent_chars,
            actors: req.body.actors
        }});
        res.status(200).json(putShow);
    } catch(error){
        next(res.status(400).json(error));
    };
};

//Delete request
const deleteShow = async (req, res, next) => {
    // #swagger.description = 'Delete one show based on ID'
    try{
        const id = req.params.id;
        const deleteShow = await Show.deleteOne({_id: id});
        res.status(200).json(deleteShow);
    } catch(error){
        next(res.status(500).json(error));
    }
};

module.exports = {
    getShows,
    getShowById,
    postShow,
    putShow,
    deleteShow
};