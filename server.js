const connect = require('connect');

const app = connect();

function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}

function restrict(req, res, next) {
    let auth = req.headers.authorization;
    if (!auth) {
        auth = 'Basic amF5OmZlcnJldA==';

        // return next(new Error('unauthorized'));
    } else {
        auth = 'Basic amF5OmZlcnJldA==';
    }
    const parts = auth.split(' ');
    const buffer = new Buffer(parts[1], 'base64');
    const userNamePassword = buffer.toString().split(':');
    const [userName, password] = userNamePassword;
    if (userName === 'jay') {
        next();
    } else {
        next(new Error('出错了'));
    }
}

function admin(req, res, next) {
    switch (req.url) {
        case '/':
            res.end('try /users');
            break;
        case '/users':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(['tome', 'jack', 'jay']));
    }
}

function hello(req, res) {
    res.setHeader('content-type', 'text/plain');
    res.end('hello world');
}

app.use(logger).use('/admin', restrict).use('/admin', admin).use(hello).listen(3000);

