//This file is for the shows schema

const mongoose = require('mongoose');

const showsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genres: {
        type: Array,
        required: true
    },
    creators: {
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
    distributor: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    prominent_chars: {
        type: Array,
        required: true
    },
    actors: {
        type: Array,
        required: true
    },
}, 
{
    collections: 'shows'
});

let Shows = mongoose.model('Shows', showsSchema);

module.exports = Shows;