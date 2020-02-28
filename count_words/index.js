const fs = require('fs');

const DIR = './text', tasks = [], wordsCount = {};
let complexCount = 0;

function countWordsInText(text) {
    const words = text.toString().toLowerCase().split(/\W+/).sort();
    for (let word of words) {
        if(word) {
            wordsCount[word] = wordsCount[word] ? wordsCount[word]+1 : 1;

        }
    }
}

function checkIfComplete() {
    complexCount++;
    if (complexCount === tasks.length) {
        for (const key of Object.keys(wordsCount)) {
            console.log(key, wordsCount[key]);
        }
    }
}

fs.readdir(DIR, function (err, files) {
    if (err) throw err;

    for (const file of files) {
        const task = (
            function (fileName) {
                return function () {
                    fs.readFile(fileName, function (error, fileContent) {
                        if (error) throw error;
                        countWordsInText(fileContent);
                        checkIfComplete();
                    });
                };
            }
        )(DIR +'/'+ file);
        tasks.push(task);
    }

    for (const task of tasks) {
        task();
    }
});
