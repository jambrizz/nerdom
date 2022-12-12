const router = require('express').Router();
const controller = require('../controllers/movies-controller');

//get all posts
router.get("/", controller.getMovies);
router.get("/:id", controller.getMovieById);
router.get("/:title", controller.getMovieByTitle);

//All POST requests
router.post("/", controller.postMovie);

//All PUT requests
router.put("/:id", controller.putMovie);

//All DELETE requests
router.delete("/:id", controller.deleteMovie);

module.exports = router;