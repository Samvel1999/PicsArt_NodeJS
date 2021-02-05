const fs = require('fs').promises;

function pathToObj(path) {
    let result = {};
    let count = 0;   //It is for recursion. With it we can determine when function was over.

    function f(obj, path, printResult) {
        count++;
        let folders = [];
        p = fs.readdir(path);
        p.then((res) => {
            count--;
            for(let i = 0; i < res.length; i++) {
                if(res[i].match(/.txt($)/g)) {
                    obj[res[i]] = true;
                }
                else {
                    obj[res[i]] = {};
                    folders.push(res[i]);
                }
            }

            for( let i = 0; i < folders.length; i++) {
                f(obj[folders[i]], path + "/" + folders[i],printResult);
            }

            if(count === 0) {
                printResult();
            }
        }).catch((err) => {
            console.log("Error: " + err);
        })
    }

    f(result, path, () => {
        console.log(result);
    });
}

pathToObj("c:/users/samvel/desktop/PicsArt_NodeJS/root");