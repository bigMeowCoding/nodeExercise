const http = require('http'), fs = require('fs');

http.createServer(
    (req, res,) => {
        res.writeHead(200, {
            'Content-Type':'image/jpeg'
        });
        fs.createReadStream('./assets/images/yonger.jpeg').pipe(res)
    }
).listen(3000);

console.log('serve open');
