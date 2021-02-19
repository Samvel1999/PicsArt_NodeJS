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

function parse(str) {
    if(!isNaN(Number(str))) {
        str = Number(str);
    }
    else if(str === 'true') {
        str = true;
    }
    else if(str === 'false') {
        str = false;
    }
    else if((str.startsWith("'") && str.endsWith("'")) || (str.startsWith('"') && str.endsWith('"'))
        || (str.startsWith("`") && str.endsWith("`"))) {
        str = str.slice(1, str.length - 1);
    }

    return str;
}

exports.config = config;