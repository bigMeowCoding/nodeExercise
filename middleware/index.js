const parse = require('url').parse
function logger(req, res, next) {
    // try{
    console.log('%s %s', req.method, req.url);
    // next();
    // } catch (e) {
    // return next(new Error('ss'));
    // }
    // next();

}

function user(req, res, next) {
    const users = ['jack', 'jay', 'tome'];
    const match = req.url.match(/^\/user\/(.+)/);
    if (match) {
        if (users.includes(match[1])) {
            res.end(match[1]);
        } else {
            const err = new Error('not found');
            err.errorCode = 404;
            next(err);
        }
    } else {
        next();
    }
}

function pets(req, res, next) {
    const match = req.url.match(/^\/pets\/(.+)/);
    if (match) {
        foo();
    } else {
        next();
    }
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
        return next(new Error('出错了'));
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

function hello(req, res, next) {
    if (req.url.match(/^\/hello/)) {
        const url = parse(req.url);
        res.setHeader('content-type', 'text/plain');
        res.setHeader('Set-Cookie', 'dd=df;Cache-control:maxAge=10');
        res.end('hello world');
    } else {
        next();
    }

}

function errorHandle() {
    const env = process.env.NODE_ENV || 'dev';
    return function (error, req, res, next) {
        switch (env) {
            case 'dev':
                if (error.errorCode === 404) {
                    res.end(JSON.stringify({
                        error: error.message || '内部错误'
                    }));
                } else {
                    res.end('interval error');
                }

                break;
            default:
                res.end('interval error');
        }
    };
}

module.exports = {
    hello,
    admin,
    logger, restrict,
    errorHandle,
    user,
    pets
};