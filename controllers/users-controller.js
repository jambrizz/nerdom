const express = require('express');
const mongoose = require('mongoose');
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

//PUT request
const putUser = async (req, res, next) => {
    // #swagger.description = 'Update one user based on ID'
    try{
        const id = req.params.id;
        const putUser = await User.updateOne({}, {$set: {
            username: req.body.username,
            password: req.body.password
        }});
        res.status(200).json(putUser);
    } catch(error){
        next(res.status(400).json(error));
    };
};

//DELETE request
const deleteUser = async (req, res, next) => {
    // #swagger.description = 'Delete one user based on ID'
    try{
        const id = req.params.id;
        const deleteUser = await User.deleteOne({_id: id});
        res.status(200).json(deleteUser);
    } catch(error){
        next(res.status(500).json(error));
    };
};

module.exports = {
    getUsers,
    putUser,
    deleteUser
};