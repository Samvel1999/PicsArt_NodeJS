const User = require('../models/userModel');
const MethodsForFile = require('../methodsWorkingWithData');

//Get Users
//GET /users
async function getUsers(request, response) {
    try {
        const users = await User.findAll();

        response.writeHead(200, {'Content-Type': 'application.json'})
        response.end(JSON.stringify(users));
    } catch (err) {
        console.log(err);
    }
}

//Get specific User
//GET /users/id
async function getUser(request, response, id) {
    try {
        const user = await User.findById(id);

        if(!user) {
            response.writeHead(404, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify({ message: 'User Not Found' }))
        }
        else {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(user));
        }
    }
    catch (err) {
        console.log(err);
    }
}

async function searchUser(request, response, pattern) {
    try {
        const users = await User.findByName(pattern);

        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(users));
    }
    catch(err) {
        console.log(err);
    }
}

//Create a User
//POST /users
async function createUser(request, response) {
    try {
        let user = await MethodsForFile.getPostData(request);

        const {name} = JSON.parse(user);

        user = {
            name
        }

        let newUser = await User.create(user);


        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(newUser))
    } catch (err) {

        console.log(err);
    }
}

async function updateUser(request, response, id) {
    try {
        let user = await MethodsForFile.getPostData(request)

        const {name} = JSON.parse(user);

        user = {
            id,
            name
        }

        if(!user) {
            response.writeHead(404, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({message: 'User not found'}))
        }
        else {
            await User.update(id, user);

            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify({ message: `User ${id} was updated` }))
        }
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteUser(request, response, id) {
    try {
        const user = await User.findById(id);

        if(!user) {
            response.writeHead(404, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({message: 'User not found'}))
        }
        else {
            await User.remove(id);

            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify({ message: `User ${id} was removed` }))
        }
    }
    catch(err) {
        console.log(err);
    }
}

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.searchUser = searchUser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;