const router = require('express').Router();
const controller = require('../controllers/users-controller');

//get all posts
router.get("/", controller.getUsers);

//PUT request
router.put("/:id", controller.putUser);

//DELETE request
router.delete("/:id", controller.deleteUser);

module.exports = router;