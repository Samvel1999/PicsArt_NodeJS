const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

let register = async (req, res) => {
    const emailExist = await userModel.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists.');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch(err) {
        res.status(400).send(err);
    }
};

let login = async(req, res) => {
    const user = await userModel.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email does not exist.');

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password');

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
};

let find = async(req, res) => {
    let allUsers = await userModel.find();
    let usersByFirstName = [];
    let users = []

    if(req.body.firstName) {
        for(let user of allUsers) {
            if(user.firstName === req.body.firstName) {
                usersByFirstName.push(user);
            }
        }
    }

    if(req.body.lastName) {
        for(let user of usersByFirstName) {
            if(user.lastName === req.body.lastName) {
                users.push(user);
            }
        }
        res.status(201).send(users);
        return;
    }

    res.status(201).send(usersByFirstName);

    
}

let update = async (req, res) => {
    let user = await userModel.findById(req.user._id);
    console.log(user);

    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.gender = req.body.gender || user.gender;

    if(req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        user.password = hashedPassword;
    }

    user.save();
    res.status(201).send(user);
}

module.exports = {
    register, login, find, update
}