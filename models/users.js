//This files is for the users schema

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
},
{
    collection: 'users'
});

let Users = mongoose.model('Users', usersSchema);

module.exports = Users;