//This file is for the movies schema

const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    writers: {
        type: Array,
        required: true,
        lowercase: true
    },
    producers: {
        type: Array,
        required: true,
        lowercase: true
    },
    production_companies: {
        type: Array,
        required: true,
        lowercase: true
    },
    release_date: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    actors: {
        type: Array,
        required: true,
        lowercase: true
    },
    prominent_chars: {
        type: Array,
        required: true,
        lowercase: true
    },
    genres: {
        type: Array,
        required: true,
        lowercase: true
    },
    distribution: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    }
}, 
{
    collection: 'movies'
});

let Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;