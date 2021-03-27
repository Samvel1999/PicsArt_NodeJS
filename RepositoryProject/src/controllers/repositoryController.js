const redis = require('redis');

const client = redis.createClient();

const getCountOfRepositories = (req, res) => {
    client.get("count", (err, data) => {
        if(err) {
            throw err;
        }

        return res.json({
            count: data
        });
    });
}

module.exports = {
    getCountOfRepositories
}