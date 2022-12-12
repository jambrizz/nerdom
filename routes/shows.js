const router = require('express').Router();
const controller = require('../controllers/shows-controller');
const loadUser = require('../middleware/loadUser');


router.use([loadUser]);

//get all posts
router.get("/", controller.getShows);

//POST request
router.post("/", controller.postShow);

//PUT request
router.put("/:id", controller.putShow);

//DELETE request
router.delete("/:id", controller.deleteShow);

module.exports = router;