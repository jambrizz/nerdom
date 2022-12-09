const router = require('express').Router();
const controller = require('../controllers/users-controller');

//get all posts
router.get("/", controller.getUsers);

module.exports = router;