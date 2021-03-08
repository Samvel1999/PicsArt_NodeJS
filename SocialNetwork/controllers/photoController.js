const userModel = require('../models/userModel');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        let today = new Date();
        callback(null, today.toDateString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});


const findAll = async(req, res) => {
    let user = await userModel.findById(req.params.id);

    for(let post of user.posts) {
        if(String(post._id) === req.params.postId) {
            res.status(200).send(post.photos);
            return;
        }
    }

    res.status(201).send([]);
}

const findById = async(req, res) => {
    let user = await userModel.findById(req.params.id);

    for(let post of user.posts) {
        if(String(post._id) === req.params.postId) {
            res.status(200).sendFile(
                `c:/users/samvel/desktop/PicsArt_NodeJS/SocialNetwork/${post.photos[req.params.photoId]}`
            );
        }
    }
}

const save = async(req, res) => {
    let user = await userModel.findById(req.user._id);

    for(let post of user.posts) {
        if(String(post._id) === req.params.id) {
            post.photos.push(req.file.path);
        }
    }

    user.save();
    res.status(201).send(req.file);
}

module.exports = {
    upload, findAll, findById, save
}