const express = require('express');
const router = express.Router();

router.use('/api-docs', require('./docs'));

module.exports = router;