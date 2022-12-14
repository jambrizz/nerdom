//creates a variable called express and sets it to the express module
const express = require('express');
//Database
const mongoose = require('mongoose')
//creates a variable to parse the body of the request
const bodyParser = require('body-parser');
//creates a variable to require CORS will move it to its own middleware file
const cors = require('cors');
//variable specify the local port or the production port
const port = process.env.PORT || 3000;
//creates a variable called app and sets it to the express module
const app = express();
//handlebars
const exphbs = require('express-handlebars')
//login
const morgan = require('morgan')
//path
const path = require('path')
//google authentication
const passport = require('passport')
const session = require('express-session')
const dotenv = require('dotenv')

const methodOverride = require('method-override')

const MongoStore = require('connect-mongo');

require('./config/passport')(passport)

app 
    .use(bodyParser.json())
    .use(cors())
    .use((req, res, next) =>{
        res.setHeader('Access-Control_Allow-Origin', '*');
        next();
    })
  
    //Body Parser
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json()) 

    // Method override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  })
)

    // Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }

  // Handlebars Helpers

const {
  formatDate,
  stripTags,
  truncate,
  editIcon,
  select,
} = require('./helpers/hbs')


  //Handlebars
  app.engine ( '.hbs', exphbs.engine({ helpers: {
    formatDate,
    stripTags,
    truncate,
    editIcon,
    select,
  }, defaultLayaout: 'main', extname: '.hbs'}))
  app.set('view engine', 'hbs')

  //images

  app.use(express.static('images'));

  // Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl: process.env.MONGODB_URI,})
      
    })
  )
  
    // Passport middleware
    app.use(passport.initialize())
    app.use(passport.session())


      // Set global var
  app.use(function (req, res, next) {
    res.locals.user = req.user || null
    next()
  })

      // Routes

app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/movies', require('./routes/movies'))

  // Static folder
app.use(express.static(path.join(__dirname, 'public')))


  
const db =  require('./models/index.js');
db.mongoose
    .connect(db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Database connected and listening on port ${port}`);
        });
    })
    .catch((err) =>{
        console.log(err);
        process.exit();
    });