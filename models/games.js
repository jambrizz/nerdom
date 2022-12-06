//This file is for the games schema

const mongoose = require('mongoose');

const gamesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    developers: {
        type: Array,
        required: true
    },
    publishers: {
        type: Array,
        required: true
    },
    creators: {
        type: Array,
        required: true
    },
    platforms: {
        type: Array,
        required: true
    },
    prominent_chars: {
        type: Array,
        required: true
    },
    actors: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
}, 
{
    collection: 'games'
});

let Games = mongoose.model('Games', gamesSchema);

module.exports = Games;