const express = require('express');
const router = express.Router();

router.use('/api-docs', require('./docs'));
router.use('/games', require('./games'))

module.exports = router;