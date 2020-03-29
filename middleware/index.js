function logger(req, res, next) {
    // try{
    f();
    console.log('%s %s', req.method, req.url);
    // next();
    // } catch (e) {
    // return next(new Error('ss'));
    // }
    // next();

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

function hello(req, res) {
    res.setHeader('content-type', 'text/plain');
    res.end('hello world');
}

function errorHandle() {
    const env = process.env.NODE_ENV || 'dev';
    return function (error, req, res, next) {
        switch (env) {
            case 'dev':
                res.end(JSON.stringify({
                    error: error.message || '内部错误'
                }));
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
    errorHandle
};