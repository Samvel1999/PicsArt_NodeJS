const fs = require('fs').promises;

function pathToObj(path) {
    let result = {};

    function f(path) {
        let folders = [];
        let obj = {};
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
                f(path + "/" + folders[i]);
            }



        }).then(() => {
            let arr = path.split("/");
            result[arr[arr.length - 1]] = obj;
        }).then(() => {
            if(folders.length === 0) {
                console.log(result);
            }
        }).catch((err) => {
            console.log("Error: " + err);
        })
    }


    f(path);
}

pathToObj("c:/users/samvel/desktop/PicsArt_NodeJS/root");


