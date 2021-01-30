function allImpl() {
    let arr = arguments[0];
    let res = [];
    let count = 0;

    return new Promise((resolve, reject) => {
        if(!Array.isArray(arr)) {
            reject("Is not iterable.")
        }

        if(arr.length === 0) {
            resolve(res);
        }

        for(let elem of arr) {
            elem.then((val) => {
                res.push(val);
                count++;
                if(count === arr.length) {
                    resolve(res);
                }
            }).catch((err) => {
                reject(err);
            })
        }
    })
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let p1bool = true;
        if(p1bool) {
            resolve("p1 resolved");
        }
        else {
            reject("p1 rejected");
        }
    },4000);
});

let p2 = Promise.resolve(25);
let p3 = Promise.resolve(11);


Promise.all = allImpl;

Promise.all([p1, p2, p3]).then(val => {
    console.log(val);
}).catch(err => {
    console.log(err);
});

