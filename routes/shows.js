const router = require('express').Router();
const controller = require('../controllers/shows-controller');
const loadUser = require('../middleware/loadUser');


router.use([loadUser]);

//get all posts
router.get("/", controller.getShows);

module.exports = router;