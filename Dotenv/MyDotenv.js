const fs = require('fs');

function config(file) {
    file = file || '.env';
    let data = fs.readFileSync(file);
    let str = data.toString();
    let arr = str.split('\r\n');

    for(let str of arr) {
        if(!str.startsWith('#') && str.length !== 0) {
            str = str.split('=');
            process.env[str[0]] = str[1];
        }
    }
}

exports.config = config;