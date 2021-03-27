const mongoose = require('mongoose');

const repositorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
    },
    description: {
        type: String
    },
    url: {
        type: String,
        required: true
    },
    html_url: {
        type: String,
    }
});

const repositoryModel = mongoose.model('repositories', repositorySchema);

module.exports = {
    repositoryModel
}