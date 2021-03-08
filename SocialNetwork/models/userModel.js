const mongoose = require('mongoose');
const {postSchemaModel, postSchema} = require('./postModel');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: {
        type: [postSchema],
        required: true
    }
});

module.exports = mongoose.model('users', userSchema);