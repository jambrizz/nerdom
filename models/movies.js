//This file is for the movies schema

const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    writers: {
        type: Array,
        required: true
    },
    producers: {
        type: Array,
        required: true
    },
    production_companies: {
        type: Array,
        required: true
    },
    release_date: {
        type: String,
        required: true,
        trim: true
    },
    actors: {
        type: Array,
        required: true
    },
    prominent_chars: {
        type: Array,
        required: true
    },
    genres: {
        type: Array,
        required: true
    },
    distribution: {
        type: String,
        required: true,
        trim: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }
}, 
{
    collection: 'movies'
});

let Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;