function myCustomPromisify(asyncFunction) {
    return function () {
        return new Promise((res, rej) => {
            asyncFunction(...arguments, (exception, buffer) => {
                if (exception === null) {
                    res(buffer);
                } else {
                    rej(exception);
                }
            });
        });
    }
}

const fs = require('fs');
const readFileWithPromise = myCustomPromisify(fs.readFile);

readFileWithPromise("c:/users/samvel/desktop/PicsArt_NodeJS/root/folder1/folder1-2/A.txt")
    .then((res) => {
        console.log(res.toString());
    })
    .catch((exception) => {
        console.log(exception);
    })