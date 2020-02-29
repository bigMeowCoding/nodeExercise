const http = require('http'), url = require('url');

const items = [];
http.createServer(function (req, res) {
    let item = '', index = null;
    const path = url.parse(req.url).pathname;
    switch (req.method) {
        case 'POST':
            req.setEncoding('utf8');
            req.on('data', function (chunk) {
                item += chunk;
            });
            req.on('end', function () {
                items.push(item);
                res.end('OK\n');
            });
            break;
        case 'GET':
            items.forEach((item, i) => {
                res.write(i + ' )' + item + '\n');
            });
            res.end();
            break;
        case 'delete':
            index = parseInt(path.slice(1), 10);
            if (isNaN(index)) {
                res.statusCode = 400;
                res.end('invalid item id');
            } else if (items[index] == null) {
                res.statusCode = 404;
                res.end('item not found');
            } else {
                items.splice(index,1);
                res.end('OK\n');
            }
            break;

    }
}).listen(3000);
