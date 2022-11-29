const router = require('express').Router();
const controller = require('../controllers/movies-controller');

//get all posts
router.get("/", controller.getMovies);

module.exports = router;