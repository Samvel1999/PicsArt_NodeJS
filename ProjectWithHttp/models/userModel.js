let users = require('../database/users');
const methodsWorkingWithData = require('../methodsWorkingWithData')

function findAll() {
    return new Promise((res, rej) => {
        res(users);
    })
}

function findById(id) {
    return new Promise((res, rej) => {
        const user = users.find((currentUser) => currentUser.id === id);
        res(user);
    })
}

function findByName(pattern) {
    return new Promise((res, rej) => {
        let usersWithPattern = [];

        users.forEach((user) => {
            if(user.name.includes(pattern)) {
                usersWithPattern.push(user);
            }
        })

        res(usersWithPattern);
    })
}

function create(user) {
    return new Promise((res, rej) => {
        const newUser = {...user};
        let lastId = users[users.length - 1].id;
        newUser.id = (Number(lastId) + 1).toString();
        users.push(newUser);
        methodsWorkingWithData.addDataToFile('./database/users.json', users);
        res(newUser);
    })
}

function update(id, updatedUser) {
    return new Promise((res, rej) => {
        for(let i = 0; i < users.length; i++) {
            if(users[i].id === id) {
                users[i] = updatedUser;
                break;
            }
        }
        methodsWorkingWithData.addDataToFile('./database/users.json', users);
        res();
    })
}

function remove(id) {
    return new Promise((res, rej) => {
        users = users.filter((currentUser) => currentUser.id !== id);
        methodsWorkingWithData.addDataToFile('./database/users.json', users);
        res();
    })
}

exports.findAll = findAll;
exports.findById = findById;
exports.findByName = findByName;
exports.create = create;
exports.update = update;
exports.remove = remove;