const fs = require('fs');

function addDataToFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if(err) {
            console.log(err);
        }
    });
}

function getPostData(request) {
    return new Promise((res, rej) => {
        try {
            let user = '';

            request.on('data', (body) => {
                user += body.toString();
            });

            request.on('end', () => {
                res(user);
            })
        }
        catch (err) {
            rej(err);
        }
    })
}

exports.addDataToFile = addDataToFile;
exports.getPostData = getPostData;