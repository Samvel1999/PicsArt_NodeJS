const axios = require('axios');
const redis = require('redis');
const dotenv = require('dotenv').config();

const {repositoryModel} = require('../src/models/repositoryModel');
const {repositoryListener} = require('../src/listeners/repositoryListener');
const pub = redis.createClient();

async function collectRepositories() {
    const url = `https://api.github.com/repositories?q=something`;
    const res = await axios.get(url);

    await repositoryModel.deleteMany();

    for(let repo of res.data) {
        const repository = new repositoryModel({
            name: repo.name,
            full_name: repo.full_name,
            private: repo.private,
            description: repo.description,
            url: repo.url,
            html_url: repo.html_url
        });

        repository.save();
    }
    repositoryListener();

    pub.publish(process.env.channel, 'Count is updated');

}

module.exports = {
    collectRepositories
}