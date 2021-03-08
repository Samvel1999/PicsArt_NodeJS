const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photos: [String],
    created: {
        type: Date
    }
});

let postSchemaModel = mongoose.model('posts', postSchema);

module.exports = {
     postSchemaModel, postSchema
}