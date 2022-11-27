//This file is for the shows schema

const mongoose = require('mongoose');

const showsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    },
    genres: {
        type: Array,
        required: true,
        lowercase: true
    },
    creators: {
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
    distributor: {
        type: String,
        required: true,
        lowercase: true
    },
    release_date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    prominent_chars: {
        type: Array,
        required: true,
        lowercase: true
    },
    actors: {
        type: Array,
        required: true,
        lowercase: true
    },
}, 
{
    collections: 'shows'
});

let Shows = mongoose.model('Shows', showsSchema);

module.exports = Shows;