// const connect = require('connect');
const logger = require('morgan');
const session = require('express-session')

const favicon = require('serve-favicon');
const middleware = require('./middleware');
const express = require('express');
const path = require('path')

// app.use(logger).use('/admin', restrict).use('/admin', admin).use(hello).listen(3000);
// connect().use(middleware.logger).use(middleware.hello).use(middleware.errorHandle()).listen(3000);
// const api = connect().use(middleware.user).use(middleware.pets);
const app = express();

app.use(favicon(path.join(__dirname, 'assets/images/favicon.ico')))
    .use(logger())
    .use(
        session({
            secret: 'keyboard cat',
            cookie: {
                maxAge:3000
            }
        })
    )
    .use(function (req, res, next) {
        if(req.session) {
            req.session.a = req.session.a?req.session.a+1:1;
        }
        next();
    }).use(function (req, res, next) {
    console.log(req.session);
    next();
})
    .listen(3000);