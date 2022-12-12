const router = require('express').Router();
const controller = require('../controllers/games-controller');

//ALL GET REQUESTS
router.get("/", controller.getGames);
router.get("/:id", controller.getGameById);
router.get("/:title", controller.getGameByTitle);
router.get("/:genre", controller.getGamesByGenre);

//ALL POST REQUESTS
router.post("/", controller.postGame);

//ALL PUT REQUESTS
router.put("/:id", controller.putGame);

//ALL DELETE REQUESTS
router.delete("/:id", controller.deleteGame);
module.exports = router;