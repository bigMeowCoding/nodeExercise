const connect = require('connect');
const router = require('./router');
const routes = require('./routes/user');
const middleware = require('./middleware');


// app.use(logger).use('/admin', restrict).use('/admin', admin).use(hello).listen(3000);
// connect().use(middleware.logger).use(middleware.hello).use(middleware.errorHandle()).listen(3000);
const api = connect().use(middleware.user).use(middleware.pets);
connect().use(middleware.hello).use(
    '/api', api
).use(middleware.errorHandle()).listen(3000);