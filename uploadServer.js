const http = require('http'), formidable = require('formidable'), fs = require('fs'), iconv = require('iconv-lite');


function show(res) {
    const html = '<form method="post" action="/" enctype="multipart/form-data"><p><input type="text" name="name"></p>' +
        '<p><input type="file" name="file"></p>' +
        '<p><input type="submit" value="upload"></p>' +
        '</form>';
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

function isFormData(req) {
    const type = req.headers['content-type'] || '';
    return type.indexOf('multipart/form-data') !== -1;
}

function upload(req, res) {
    if (!isFormData(req)) {
        res.statusCode = 400;
        res.end('bad request');
        return;
    }
    const form = new formidable.IncomingForm();
    form.parse(req, function (error, field, files) {
        if (error) throw error;
        console.log('filed', field);
        console.log('files', files);
    });

    // form.on('field', function (field, value) {
    //     console.log('filed 事件', field, value);
    // });
    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + iconv.encode (file.name, 'utf8');
    });
    form.on('file', function (name, file) {
        console.log('file事件', name, file);
    });
}

http.createServer(function (req, res) {
    switch (req.method) {
        case 'GET':
            show(res);
            break;
        case 'POST':
            upload(req, res);
            break;
    }
}).listen(3000);
