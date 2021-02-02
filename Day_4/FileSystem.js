const fs = require('fs').promises;

function pathToObj(path) {
    let result = {};
    let isPrinted = false;

    function f(obj, path) {
        let folders = [];
        p = fs.readdir(path);
        p.then((res) => {
            for(let i = 0; i < res.length; i++) {
                if(res[i].match(/.txt($)/g)) {
                    obj[res[i]] = true;
                }
                else {
                    obj[res[i]] = {};
                    folders.push(res[i]);
                }
            }
        }).then(() => {
            for( let i = 0; i < folders.length; i++) {
                f(obj[folders[i]], path + "/" + folders[i]);
            }
        }).then(() => {
            if(folders.length === 0 && !isPrinted) {
                console.log(result);
                isPrinted = true;
            }
        }).catch((err) => {
            console.log("Error: " + err);
        })
    }


    f(result, path);
}

pathToObj("c:/users/samvel/desktop/PicsArt_NodeJS/root");





