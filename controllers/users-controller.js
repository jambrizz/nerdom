const express = require('express');
//get the review model
const User = require("../models/users");

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        next(error);
    }
};

module.exports = {getUsers};