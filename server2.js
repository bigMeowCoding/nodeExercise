const http = require('http'), Url = require('url');

http.createServer(
    (req, res,) => {
        req.setEncoding('utf8')
        const url = 'http://google.com:3000/2/ff?id=dfe';
        console.log(Url.parse(url))
        res.end();
    }
).listen(3000);

console.log('serve open');
