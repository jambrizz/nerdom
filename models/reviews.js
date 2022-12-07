//This files is for the reviews schema

const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true, 
        trim: true
    },
    media: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
}, 
{
 collection: 'reviews'
});

let Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;