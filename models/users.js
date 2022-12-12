//This files is for the users schema

const { Double } = require('mongodb');
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    reviews: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    }
},
{
    collection: 'users'
});

let Users = mongoose.model('Users', usersSchema);

module.exports = Users;