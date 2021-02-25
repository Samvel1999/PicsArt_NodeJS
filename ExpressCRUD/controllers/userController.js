let users = require('../database/users.json');
const fs = require('fs');


const findAll = (request, response) => {
    response.json(users);
}

const findById = (request, response) => {
    const found = users.some(user => user.id === parseInt(request.params.id));

    if(found) {
        response.json(users.filter((user) => user.id === parseInt(request.params.id)));
    } else {
        response.status(400).json({message: `No member with the id of ${request.params.id}`})
    }
}

const searchUser = (request, response) => {
    let usersWithPattern = [];
    console.log(typeof request.params.pattern);
    users.forEach((user) => {
        if(user.name.includes(request.params.pattern)) {
            usersWithPattern.push(user);
        }
    });

    response.status(200).json(usersWithPattern);
}

const createUser = (request, response) => {
    const newUser = {
        id: users[users.length - 1].id + 1,
        name: request.body.name,
        email: request.body.email
    }

    if(!newUser.name || !newUser.email) {
        return response.status(400).json({message: 'Please include a name and email'})
    }

    users.push(newUser);

    fs.writeFileSync('./database/users.json', JSON.stringify(users), 'utf8', (err) => {
        console.log(err);
    })

    response.json(users);
}

const updateById = (request, response) => {
    const found = users.some(user => user.id === parseInt(request.params.id));

    if(found) {
        const updUser = request.body;
        users.forEach((user) => {
            if(user.id === parseInt(request.params.id)) {
                user.name = updUser.name? updUser.name : user.name;
                user.email = updUser.email? updUser.email : user.email;

                fs.writeFileSync('./database/users.json', JSON.stringify(users), 'utf8', (err) => {
                    console.log(err);
                })

                response.json(users);
                response.json({message: 'User update', user})
            }
        });
    } else {
        response.status(400).json({message: `No user with the id of ${request.params.id}`})
    }
}

const deleteById = (request, response) => {
    const found = users.some(user => user.id === parseInt(request.params.id));

    if(found) {
        users = users.filter(user => user.id !== parseInt(request.params.id));
        response.json({message: 'User deleted', members: users})
        fs.writeFileSync('./database/users.json', JSON.stringify(users), 'utf8', (err) => {
            console.log(err);
        })

        response.json(users);
    } else {
        response.status(400).json({message: `No member with the id of ${request.params.id}`})
    }

}

exports.findAll = findAll;
exports.findById = findById;
exports.searchUser = searchUser;
exports.createUser = createUser;
exports.updateById = updateById;
exports.deleteById = deleteById;