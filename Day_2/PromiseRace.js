function raceImpl() {
    let arr = arguments[0];
    let flag = false;

    return new Promise((resolve, reject) => {
        if(!Array.isArray(arr)) {
            reject("Is not iterable.")
        }

        for(let i = 0; i < arr.length; i++) {
            arr[i].then((val) => {
                if(!flag) {
                    resolve(val);
                    flag = true;
                }
            }).catch((err) => {
                if(!flag) {
                    reject(err);
                    flag = true;
                }
            })
        }
    })
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let isTrue = false;
        if(isTrue) {
            resolve("p1 resolved");
        }
        else {
            reject("p1 rejected");
        }
    },7000);
});

let p2 = Promise.resolve(13);
let p3 = Promise.resolve("Success");

let p4 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let isTrue = false;
        if(isTrue) {
            resolve("p4 resolved");
        }
        else {
            reject("p4 rejected");
        }
    },1000);
});

let arr = [p1, p2, p3, p4];

Promise.race = raceImpl;

Promise.race(arr)
    .then(val => console.log(val))
    .catch(err => console.log(err));