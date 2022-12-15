const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Movies = require('../models/movies')
// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login',
  })
})

  // @desc    Login/Landing page
// @route   GET /
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    const movies = await Movies.find({ user: req.user.id }).lean()
    res.render('dashboard', {
      name: req.user.firstName,
      movies,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

router.use('/api-docs', require('./docs'));
// router.use('/games', require('./games'));
// router.use('/movies', require('./movies'));
router.use('/reviews', require('./reviews'));
router.use('/authorization', require('./authorization'));
router.use('/shows', require('./shows'));
// router.use('/users', require('./users'));

module.exports = router;