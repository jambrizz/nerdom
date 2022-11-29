const router = require('express').Router();
const controller = require('../controllers/reviews-controller');

//get all posts
router.get("/", controller.getReviews);

module.exports = router;