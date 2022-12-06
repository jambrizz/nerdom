const express = require('express');
//get the review model
const Show = require("../models/shows");

const getShows = async (req, res, next) => {
    try {
        const shows = await Show.find();
        res.send(shows);
    } catch (error) {
        next(error);
    }
};

module.exports = {getShows};