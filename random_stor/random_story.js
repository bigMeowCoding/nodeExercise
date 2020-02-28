const fs = require('fs'), request = require('request');

const configFileName = './rss_feed.txt';

function checkForRSSFile() {
    fs.exists(configFileName, function (exists) {
        if (!exists) return next(new Error('Missing Rss file:' + configFileName));

        next(null, configFileName);
    });
}

function readRSSFile(configFileName) {
    fs.readFile(configFileName, function (error, feedList) {
        if (error) return next(error);

        feedList = feedList.toString().replace(/^\s+|\s+$/g, '').split('\n');
        const random = Math.floor(Math.random() * feedList.length);
        next(null, feedList[random]);
    });
}

function downLoadRSSFeed(feedUrl) {
    request({uri:feedUrl}, function (err, res, body) {
        if(err) next(err);

        if(res.statusCode !== 200) {
            next(new Error('abnormal status code'));
        }

        next(null, body);
    });
}



function next(err, result) {
    if (err) throw err;

}

readRSSFile(configFileName)
