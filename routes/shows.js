const router = require('express').Router();
const controller = require('../controllers/shows-controller');

//get all posts
router.get("/", controller.getShows);

module.exports = router;