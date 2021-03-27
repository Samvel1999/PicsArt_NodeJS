const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const {repositoryRouter} = require('./routes/repositoryRouter');

const db = require('./configs/db');

const app = express();

app.use(repositoryRouter);

mongoose.connect(db.url, db.options)
    .then(() => {
        let port = process.env.PORT || 8080;
        console.log("Connected to database.");
        app.listen(port, () => {
            console.log(`Server is running on ${port}.`);
        })
    })
    .catch((err) => {
        console.log(err);
    })