const router = require('express').Router();
const controller = require('../controllers/games-controller');

//ALL GET REQUESTS
router.get("/", controller.getGames);
router.get("/:id", controller.getGameById);
router.get("/find/:title", controller.getGameByTitle);
router.get("/find/:genre", controller.getGamesByGenre);

//ALL POST REQUESTS
router.post("/", controller.postGame);

module.exports = router;