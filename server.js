const fs = require('fs'), path = require('path');

const args = process.argv.splice(2);
const file = path.join(process.cwd(), 'tasks.txt');
const commad = args.shift();
const taskDescription = args.join(' ');

function loadTaskArray(file, cb) {
    fs.exists(file, function (exists) {
        let tasks = null;
        if (exists) {
            fs.readFile(file, 'utf8', function (error, fileData) {
                if (error) throw error;
                const data = fileData.toString();
                tasks = JSON.parse(data) || [];
                cb(tasks);
            });
        } else {
            storeTasks(file,[taskDescription]);
        }
    });
}

function listTasks(file) {
    loadTaskArray(file, function (tasks) {
        for (const task of tasks) {
            console.log(task);
        }
    });
}

function storeTasks(file, tasks) {
    fs.writeFile(file, JSON.stringify(tasks), 'utf8', function (err) {
        if (err) throw err;
        console.log('Saved');
    });
}

function addTask(file, taskDescription) {
    loadTaskArray(file, function (tasks) {
        tasks.push(taskDescription);
        storeTasks(file, tasks);
    });
}

switch (commad) {
    case 'list':
        listTasks(file);
        break;
    case 'add':
        addTask(file, taskDescription);
        break;
}
