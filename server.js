const connect = require('connect');

const app = connect();

function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}

function hello(req, res) {
    res.setHeader('content-type', 'text/plain');
    res.end('hello world');
}

app.use(logger).use(hello).listen(3000);

