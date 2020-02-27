const event = require('events'), util = require('util'), fs = require('fs');

const WATCH_DIR = './watch', PROCESS_DIR = './process';

function Watcher(watchDir, processDir) {
    this.watchDir = watchDir;
    this.processDir = processDir;
}

Watcher.prototype.watch = function () {
    const watcher = this;
    fs.readdir(this.watchDir, function (err, files) {
        if (err) throw err;
        for (const file of files) {
            watcher.emit('process', file);
        }
    });
};

Watcher.prototype.start = function () {
    const watcher = this;
    fs.watchFile(this.watchDir, function () {
        watcher.watch();
    });
};

util.inherits(Watcher, event.EventEmitter);

const watch = new Watcher(WATCH_DIR, PROCESS_DIR);
watch.on('process', function (file) {
    const watchFile = this.watchDir + '/' + file;
    const processFile = this.processDir + '/' + file.toLowerCase();

    fs.rename(watchFile, processFile, function (err) {
        if (err) throw err;
    });
})
watch.start();


