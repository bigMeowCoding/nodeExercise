const http = require('http'), url = require('url'), qs = require('querystring');

const items = [];

function show(res) {
    const html = '<html><head><title>todolist</title></head><body>' +
        '<h1>Todo List</h1><ul>' +
        items.map(function (item) {
            return '<li>' + item + '</li>';
        }).join()
        +
        '</ul><form method="post" action="/">' +
        '<p><input type="text" name="item"/></p>' +
        '<p><input type="submit" value="add item"/></p>' +
        '</form></body></html>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

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
                const obj = qs.parse(item);
                items.push(obj.item);
                show(res);
            });
            break;
        case 'GET':
            show(res);
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
                items.splice(index, 1);
                res.end('OK\n');
            }
            break;

    }
}).listen(3000);
