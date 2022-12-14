const express = require('express');
const router = express.Router();


// @desc    Login/Landing page
// @route   GET /
router.get('/', (req, res) => {
    ('login', {
        layout: 'login',
      })
  })

  // @desc    Login/Landing page
// @route   GET /
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
  })


router.use('/api-docs', require('./docs'));
router.use('/games', require('./games'));
router.use('/movies', require('./movies'));
router.use('/reviews', require('./reviews'));
router.use('/shows', require('./shows'));
router.use('/users', require('./users'));

module.exports = router;