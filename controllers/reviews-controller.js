const express = require('express');
//get the review model
const Review = require("../models/reviews");

const getReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find();
        res.send(reviews);
    } catch (error) {
        next(error);
    }
};

module.exports = {getReviews};