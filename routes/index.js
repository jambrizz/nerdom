const express = require('express');
const router = express.Router();

router.use('/api-docs', require('./docs'));
router.use('/games', require('./games'));
router.use('/movies', require('./movies'));
router.use('/reviews', require('./reviews'));
router.use('/authorization', require('./authorization'));
router.use('/shows', require('./shows'));
router.use('/users', require('./users'));

module.exports = router;