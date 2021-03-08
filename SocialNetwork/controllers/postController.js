const userModel = require('../models/userModel');
const postModel = require('../models/postModel');
const {postSchemaModel, postSchema} = require('../models/postModel');

let findAll = async(req, res) => {
    let users = await userModel.find();
    let posts = [];

    for(let user of users) {
        for(let post of user.posts) {
            posts.push(post);
        }
    }

    res.status(201).send(posts);
}

let findAllMyPosts = async(req, res) => {
    let user = await userModel.findById(req.user._id);

    res.status(201).send(user.posts);
}

let findAllPostsOfSpecificUser = async(req, res) => {
    let user = await userModel.findById(req.params.id);

    res.status(201).send(user.posts);
}

let findPostOfSpecificUser = async(req, res) => {
    let user = await userModel.findById(req.params.id);
    let posts = user.posts;

    for(let post of posts) {
        if(req.params.postId === String(post._id)) {
            res.status(201).send(post);
            break;
        }
    }
}

//finding todays news in all over the world
let find = async(req, res) => {
    let users = await userModel.find();
    let posts = [];

    for(let user of users) {
        if(req.query.description) {
            for(let post of user.posts) {
                console.log(post.description);
                if(post.description === req.query.description) {
                    posts.push(post);
                }
            }
        } else {
            let now = new Date();
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

            for(let post of user.posts) {
                if(post.created >= today) {
                    posts.push(post);
                }
            }
        }
    }

    res.status(201).send(posts);
}

let save = async(req, res) => {
    let user = await userModel.findById(req.user._id);

    let post = new postSchemaModel({
        text: req.body.text,
        description: req.body.description,
        photos: [],
        created: Date.now()
    });

    user.posts.push(post);
    let savedUser = await user.save();
    res.status(201).send(savedUser);
}

let update = async(req, res) => {
    let user = await userModel.findById(req.user._id);
    let updatedPost;

    for(let post of user.posts) {

        if(req.params.id === String(post._id)) {
            post.text = req.body.text || post.text;
            post.description = req.body.description || post.description;
            updatedPost = post;
        }
    }

    await user.save();
    res.status(201).send(updatedPost);
}

let remove = async(req, res) => {
    let user = await userModel.findById(req.user._id);
    let deletedPost;

    for(let i = 0; i < user.posts.length; i++) {
        if(req.params.id === String(user.posts[i]._id)) {
            deletedPost = user.posts[i];
            user.posts.splice(i, 1);
        }
    }

    await user.save();
    res.status(201).send(deletedPost);

    //if id >= posts.length 404 forbidden
}

module.exports = {
    findAll, findAllMyPosts, findAllPostsOfSpecificUser,
    findPostOfSpecificUser, find, save, update, remove
}

