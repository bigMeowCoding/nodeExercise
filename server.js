const connect = require('connect');
const router = require('./router');
const routes = require('./routes/user');
const middleware = require('./middleware');


// app.use(logger).use('/admin', restrict).use('/admin', admin).use(hello).listen(3000);
connect().use(middleware.logger).use(middleware.hello).use(middleware.errorHandle()).listen(3000);