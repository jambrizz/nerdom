const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
// const controller = require('../controllers/movies-controller');
const Movies = require('../models/movies')

// //get all posts
router.get('/add', ensureAuth, (req, res) => {
    res.render('movies/add')
})

 // @desc    Process add form
// @route   POST /movies
router.post('/', ensureAuth, async (req, res) => {
    try {
      req.body.user = req.user.id
      await Movies.create(req.body)
      res.redirect('/dashboard')
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })

    // @desc    Show all movies
// @route   GET /movies
router.get('/', ensureAuth, async (req, res) => {
    try {
      const movies = await Movies.find({ status: 'public' })
        .sort({ createdAt: 'desc' })
        .lean()
  
      res.render('movies/index', {
        movies,
      })
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })

// @desc    Show single movies
// @route   GET /movies/:
router.get('/:id', ensureAuth, async (req, res) => {
    // #swagger.description = 'Get all movies'
    try {
      let movies = await Movies.findById(req.params.id).populate('user').lean()
  
      if (!movies) {
        return res.render('error/404')
      }
  
      if (movies.user._id != req.user.id && movies.applied == 'applied') {
        res.render('error/404')
      } else {
        res.render('movies/show', {
          movies,
        })
      }
    } catch (err) {
      console.error(err)
      res.render('error/404')
    }
  })

  // @desc    Show edit page
// @route   GET /movies/edit/:id
router.get('/edit/:id', ensureAuth, async (req, res) => {
    try {
      const movies = await Movies.findOne({
        _id: req.params.id,
      }).lean()
  
      if (!movies) {
        return res.render('error/404')
      }

       else {
        res.render('movies/edit', {
          movies,
        })
      }
    } catch (err) {
      console.error(err)
      return res.render('error/500')
    }
  })

   // @desc    Update movies
// @route   PUT /movies/:id
router.put('/:id', ensureAuth, async (req, res) => {
    try {
      let movies = await Movies.findById(req.params.id).lean()
  
      if (!movies) {
        return res.render('error/404')
      }
  
      if (movies.user != req.user.id) {
        res.redirect('/movies')
      } else {
        movies = await Movies.findOneAndUpdate({ _id: req.params.id }, req.body, {
          new: true,
          runValidators: true,
        })
  
        res.redirect('/dashboard')
      }
    } catch (err) {
      console.error(err)
      return res.render('error/500')
    }
  })

   // @desc    Delete movies
// @route   DELETE /moviess/:id
router.delete('/:id', ensureAuth, async (req, res) => {
    try {
      let movies = await Movies.findById(req.params.id).lean()
  
      if (!movies) {
        return res.render('error/404')
      }
  
      if (movies.user != req.user.id) {
        res.redirect('/movies')
      } else {
        await Movies.remove({ _id: req.params.id })
        res.redirect('/dashboard')
      }
    } catch (err) {
      console.error(err)
      return res.render('error/500')
    }
  })



// //get all posts
// router.get("/", controller.getMovies);
// router.get("/:id", controller.getMovieById);
// router.get("/:title", controller.getMovieByTitle);

// //All POST requests
// router.post("/", controller.postMovie);

// //All PUT requests
// router.put("/:id", controller.putMovie);

// //All DELETE requests
// router.delete("/:id", controller.deleteMovie);

module.exports = router;