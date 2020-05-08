const mysql = require('mysql');
const http = require('http'), fs = require('fs'), db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'zyj5632403',
    database: 'react_blog'
});

http.createServer(
    (req, res,) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        let sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
            'type.typeName as typeName ' +
            'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
            'ORDER BY article.id DESC ';
        db.query(sql, function (err, rows) {
            if (err) {
                throw err;
            }
            res.end(JSON.stringify(rows));
        });
    }
).listen(3000);

console.log('serve open');

