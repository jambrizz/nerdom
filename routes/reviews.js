const router = require('express').Router();
const controller = require('../controllers/reviews-controller');

//GET REQUESTS
router.get("/", controller.getReviews);

//POST REQUEST
router.post("/", controller.postReview);

//PUT request
router.put("/:id", controller.putReview);

//DELETE request 
router.delete("/:id", controller.deleteReview);

module.exports = router;