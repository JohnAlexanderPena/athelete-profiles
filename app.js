const express = require('express');
const app = express();
require('dotenv').config();

// const personRoute = require('./routes/person');
const profile = require('./routes/profiles');
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')



//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.options('*', cors())


// DB Config
const db = require('./config/keys.js').mongoURI

// Connect to MongoDB
mongoose
  .connect(db,{
useUnifiedTopology: true,
useNewUrlParser: true,
useFindAndModify: false,
})
  .then(() => console.log("MongoDB Connected", db))
  .catch(err => console.log(err))



const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


app.use(cors())

// const usersRouter = require('./routes/users');






// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', index.html));
  // })
}

app.use('/profiles', cors(), profile);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

//Handler for 404 requests
app.use((req, res, next) => {
  res.status(404).send('We think you are lost')
});

//Handler for error 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname, './public/500.html'));
})



const port = process.env.port || 5000

app.listen(port, () => console.log(`Server running on ${port}`)) // Will run the files

module.exports = app;
