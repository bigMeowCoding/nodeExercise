const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer  = require('multer');
const upload = multer({ dest:__dirname + '/public/images/temp/' });
const usersRouter = require('./routes/users');
const photoRouter = require('./routes/photo');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('photos', __dirname + '/public/images');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.get('/upload', photoRouter.form);
app.post('/upload',upload.single('image'), photoRouter.submit(app.get('photos')));
app.get('/photo/download/:id', photoRouter.download(app.get('photos')));
app.use('/', photoRouter.list);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
