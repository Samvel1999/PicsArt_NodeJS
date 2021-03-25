const fs = require('fs');
const express = require('express');
const router = express.Router();

function myCustomStatic(filePath) {
    let arr = filePath.split('.');
    const extension = arr[arr.length - 1];
    let content;
    const buffer = fs.readFileSync('./' + filePath);

    if(extension === 'jpg' || extension === 'png' || extension === 'jpeg') {
        content = 'image';
    } else if(extension === 'pdf') {
        content = 'application';
    } else if(extension === 'html') {
        content = 'text';
    }

    router.get('/', (req, res) => {
        res.setHeader('content-type', content + '/' + extension);
        res.send(buffer).status(201);
    });

    return router;
}

module.exports = {
    myCustomStatic
}