const router = require('express').Router();
const controller = require('../controllers/shows-controller');

//get all posts
router.get("/", controller.getShows);
router.get("/:id", controller.getShowById);

//POST request
router.post("/", controller.postShow);

//PUT request
router.put("/:id", controller.putShow);

//DELETE request
router.delete("/:id", controller.deleteShow);

module.exports = router;