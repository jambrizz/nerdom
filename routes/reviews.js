const router = require('express').Router();
const controller = require('../controllers/reviews-controller');

//get all posts
router.get("/", controller.getReviews);

//PUT request
router.put("/:id", controller.putReview);

//DELETE request 
router.delete("/:id", controller.deleteReview);

module.exports = router;