const redis = require('redis');

const {repositoryModel} = require('../models/repositoryModel');

const sub = redis.createClient();
const client = redis.createClient();

const repositoryListener = () => {
    sub.on('message', async (channel, message) => {
        const count = await repositoryModel.countDocuments();

        client.set("count", count);
    })

    sub.subscribe(process.env.channel);
}

module.exports = {
    repositoryListener
}