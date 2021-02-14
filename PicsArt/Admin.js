const User = require('./User.js');
const Photo = require('./Photo.js');
const Video = require('./Video.js');

function Admin(name, surname, username, age) {
    User.call(this, name, surname, username, age);
    this.status = 'admin';
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.blockUser = function(user) {
    user.status = 'blocked';
}

Admin.prototype.blockPost = function(user, post) {
    if(post.constructor !== Photo && post.constructor !== Video) {
        return;
    }

    let arr = post.constructor === Photo ? user.photos : user.videos;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === post) {
            arr.splice(i, 1);
        }
    }
}

Admin.prototype.verifyUser = function(user) {
    user.status = 'verified';
}

module.exports = Admin;

