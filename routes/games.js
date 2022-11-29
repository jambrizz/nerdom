const router = require('express').Router();
const controller = require('../controllers/games-controller');

//get all posts
router.get("/", controller.getGames);

module.exports = router;