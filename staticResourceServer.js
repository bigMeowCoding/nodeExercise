const url = require('url'), http = require('http'),
    fs = require('fs'),
    path = require('path');

const root = __dirname;

http.createServer(function (req, res) {
    const urlParsed = url.parse(req.url);
    const fileDirPath = path.join(root, urlParsed.pathname);
    fs.stat(fileDirPath, function (error,status) {
        if (error) {
            if (error.code === 'ENOENT') {
                res.statusCode = 404;
                res.end('no file');
            } else {
                res.statusCode = 500;
                res.end('internal server error');
            }
        } else {
            const stream = fs.createReadStream(fileDirPath);
            res.setHeader('Content-Length', status.size);
            stream.on('data', function (chunk) {
                res.write(chunk);
            });
            stream.on('end', function () {
                res.end();
            });
            stream.on('error', function (error) {
                console.error(error);
                res.statusCode = 500;
                res.end('internal server error');
            });
        }
    });

}).listen(3000);
