const controller = require('../controllers/userController')

const requestListener = (request, response) => {
    if(request.url === '/users' && request.method === 'GET') {
        controller.getUsers(request,response);
    }
    else if(request.url.match(/\/users\/[0-9]/g) && request.method === 'GET') {
        const id = request.url.split('/')[2];
        controller.getUser(request, response, id);
    }
    else if(request.url.match(/\/users\/pattern\/\w+/) && request.method === 'GET') {
        const pattern = request.url.split('/')[3];
        controller.searchUser(request, response, pattern);
    }
    else if(request.url === '/users' && request.method === 'POST') {
        controller.createUser(request, response);
    }
    else if(request.url.match(/\/users\/[0-9]/g) && request.method === 'PUT') {
        const id = request.url.split('/')[2];
        controller.updateUser(request, response, id);
    }

    else if(request.url.match(/\/users\/[0-9]/g) && request.method === 'DELETE') {
        const id = request.url.split('/')[2];
        controller.deleteUser(request, response, id);
    }
    else {
        response.writeHead(404, {'Content-Type' : 'application/json'});
        response.end(JSON.stringify({message: 'User not found'}));
    }
}

module.exports = requestListener;