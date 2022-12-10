const router = require('express').Router();
const controller = require('../controllers/shows-controller');

//get all posts
router.get("/", controller.getShows);

//PUT request
router.put("/:id", controller.putShow);

//DELETE request
router.delete("/:id", controller.deleteShow);

module.exports = router;