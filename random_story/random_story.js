const fs = require('fs'), request = require('request'), htmlParser = require('htmlparser');

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


function parseRSSFeed(rss) {
    const handle = new htmlParser.RssHandler();
    const parser = new htmlParser.Parser(handle);
    parser.parseComplete(rss);

    if(!handle.dom.length) {
        return next(new Error('no rss items found'));
    }

    const item = handle.dom.shift();
    console.log(item.title);
    console.log(item.link);
}

const tasks = [
    checkForRSSFile,
    readRSSFile,
    downLoadRSSFeed,
    parseRSSFeed
]

function next(err, result) {
    if (err) throw err;

    const currentTask = tasks.shift();
    if(currentTask) {
        currentTask(result)
    }
}
next();

