const mongoose = require('mongoose');

const {collectRepositories} = require('./collect-repositories');
const db = require('../src/configs/db');

(async () => {
    await mongoose.connect(db.url, db.options)
})();

collectRepositories()
    .then(() => {
        console.log("Repositories are collected");
        process.exit(0);
    })
    .catch((err) => {
        console.log(err);
    })