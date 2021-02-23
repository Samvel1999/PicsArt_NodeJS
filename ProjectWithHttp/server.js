const http = require('http');
const controller = require('./controllers/userController')

const server = http.createServer((request, response) => {
    if(request.url === '/users' && request.method === 'GET') {
        controller.getUsers(request,response);
    }
    else if(request.url.match(/\/users\/\w+/) && request.method === 'GET') {
        const id = request.url.split('/')[3];
        controller.getUser(request, response, id);
    }
    else if(request.url === '/users' && request.method === 'POST') {
        controller.createUser(request, response);
    }
    else if(request.url.match(/\/users\/\w+/) && request.method === 'PUT') {
        const id = request.url.split('/')[2];
        controller.updateUser(request, response, id);
    }

    else if(request.url.match(/\/users\/\w+/) && request.method === 'DELETE') {
        const id = request.url.split('/')[2];
        controller.deleteUser(request, response, id);
    }
    else {
        response.writeHead(404, {'Content-Type' : 'application/json'});
        response.end(JSON.stringify({message: 'User not found'}));
    }
}).listen(3000);

module.exports = server;