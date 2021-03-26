const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const {myCustomStatic} = require('./middlewares/MyCustomStatic');
const PORT =  process.env.PORT ||  3000;

app.use('/public', myCustomStatic('public/caption.jpg'));

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});