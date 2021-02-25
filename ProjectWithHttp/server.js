const http = require('http');
const requestListener = require('./routes/userRoutes');
const PORT = process.env.PORT || 8080;

const server = http
    .createServer(requestListener)
    .listen(PORT, () => {console.log(`Server started on port ${PORT}`)});

module.exports = server;