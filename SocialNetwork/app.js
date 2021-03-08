const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const photoRoute = require('./routes/photoRoute');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(
    process.env.URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connected to DB')
);

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api', postRoute);
app.use('/api', photoRoute);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));