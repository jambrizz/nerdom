//creates a variable called express and sets it to the express module
const express = require('express');
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



require('./config/passport')(passport)

app 
    .use(bodyParser.json())
    .use(cors())
    .use((req, res, next) =>{
        res.setHeader('Access-Control_Allow-Origin', '*');
        next();
    })
  



    // Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }


  //Handlebars
  app.engine ( '.hbs', exphbs.engine({ defaultLayaout: 'main', extname: '.hbs'}))
  app.set('view engine', 'hbs')

  //images

  app.use(express.static('images'));

  // Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      
    })
  )
  
    // Passport middleware
    app.use(passport.initialize())
    app.use(passport.session())

      // Routes

app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

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