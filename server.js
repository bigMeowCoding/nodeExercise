const http = require('http');

http.createServer(
    (req, res,) => {
        const url = 'http://google.com';
        const body = 'redirect';
        res.setHeader('Location', url);
        res.setHeader('Content-Length', body.length);
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 301;
        res.end(body);
    }
).listen(3000);

console.log('serve open');
