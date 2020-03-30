const connect = require('connect');
const logger = require('morgan');
const favicon = require('serve-favicon');
const middleware = require('./middleware');
const path = require('path')

// app.use(logger).use('/admin', restrict).use('/admin', admin).use(hello).listen(3000);
// connect().use(middleware.logger).use(middleware.hello).use(middleware.errorHandle()).listen(3000);
const api = connect().use(middleware.user).use(middleware.pets);
const app = connect();
app.use(favicon(path.join(__dirname, 'assets/images/favicon.ico'))).listen(3000);