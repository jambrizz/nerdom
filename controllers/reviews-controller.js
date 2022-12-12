const express = require('express');
const mongoose = require('mongoose');
//get the review model
const Review = require("../models/reviews");
//const userControl = require("./users-controller");

/** GET requests */
const getReviews = async (req, res, next) => {
    // #swagger.description = 'Get all reviews'
    try {
        const reviews = await Review.find();
        res.send(reviews);
    } catch (error) {
        next(error);
    }
};

/** POST requests */
const postReview = async (req, res) => {
    // #swagger.description = 'Post one review to the database'
    const review = new Review({
        user_id: req.body.user_id,
        media: req.body.media,
        review: req.body.review,
        media_id: req.body.media_id
    });
    await review.save();
    res.send(review);
};

//Put request
const putReview = async (req, res, next) => {
    // #swagger.description = 'Update a review based on ID'
    try {
        const id = req.params.id;
        const putReview = await Review.updateOne({_id: id}, {$set:{
            user_id: req.body.user_id,
            media: req.body.media,
            review: req.body.review
        }});
        res.status(200).json(putReview);
    } catch(error) {
        next(res.status(400).json(error));
    };
};

//Delete request
const deleteReview = async (req, res, next) => {
    // #swagger.description = 'Delete a review based on ID'
    try{
        const id = req.params. id;
        const deleteReview = await Review.deleteOne({_id: id});
        res.status(200).json(deleteReview);
    } catch(error){
        next(res.status(500).json(error));
    }
};

module.exports = {
    getReviews,
    postReview,
    putReview,
    deleteReview
};