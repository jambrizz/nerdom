const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
// const controller = require('../controllers/games-controller');
const Games = require('../models/games')

// //get all posts
router.get('/add', ensureAuth, (req, res) => {
    res.render('games/add')
})

 // @desc    Process add form
// @route   POST /games
router.post('/', ensureAuth, async (req, res) => {
    try {
      req.body.user = req.user.id
      await Games.create(req.body)
      res.redirect('/dashboard')
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })

    // @desc    Show all games
// @route   GET /games
router.get('/', ensureAuth, async (req, res) => {
    try {
      const games = await Games.find({ status: 'public' })
        .sort({ createdAt: 'desc' })
        .lean()
  
      res.render('games/index', {
        games,
      })
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })

// @desc    Show single games
// @route   GET /games/:
router.get('/:id', ensureAuth, async (req, res) => {
    // #swagger.description = 'Get all games'
    try {
      let games = await Games.findById(req.params.id).populate('user').lean()
  
      if (!games) {
        return res.render('error/404')
      }
  
      if (games.user._id != req.user.id && games.applied == 'applied') {
        res.render('error/404')
      } else {
        res.render('games/show', {
          games,
        })
      }
    } catch (err) {
      console.error(err)
      res.render('error/404')
    }
  })

  // @desc    Show edit page
// @route   GET /games/edit/:id
router.get('/edit/:id', ensureAuth, async (req, res) => {
    try {
      const games = await Games.findOne({
        _id: req.params.id,
      }).lean()
  
      if (!games) {
        return res.render('error/404')
      }

       else {
        res.render('games/edit', {
          games,
        })
      }
    } catch (err) {
      console.error(err)
      return res.render('error/500')
    }
  })

   // @desc    Update games
// @route   PUT /games/:id
router.put('/:id', ensureAuth, async (req, res) => {
    try {
      let games = await Games.findById(req.params.id).lean()
  
      if (!games) {
        return res.render('error/404')
      }
  
      if (games.user != req.user.id) {
        res.redirect('/games')
      } else {
        games = await Games.findOneAndUpdate({ _id: req.params.id }, req.body, {
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

   // @desc    Delete games
// @route   DELETE /gamess/:id
router.delete('/:id', ensureAuth, async (req, res) => {
    try {
      let games = await Games.findById(req.params.id).lean()
  
      if (!games) {
        return res.render('error/404')
      }
  
      if (games.user != req.user.id) {
        res.redirect('/games')
      } else {
        await Games.remove({ _id: req.params.id })
        res.redirect('/dashboard')
      }
    } catch (err) {
      console.error(err)
      return res.render('error/500')
    }
  })



//ALL GET REQUESTS
// router.get("/", controller.getGames);
// router.get("/:id", controller.getGameById);
// router.get("/:title", controller.getGameByTitle);
// router.get("/:genre", controller.getGamesByGenre);

// //ALL POST REQUESTS
// router.post("/", controller.postGame);

// //ALL PUT REQUESTS
// router.put("/:id", controller.putGame);

// //ALL DELETE REQUESTS
// router.delete("/:id", controller.deleteGame);
module.exports = router;