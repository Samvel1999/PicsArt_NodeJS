const Post = require('./Post.js');

function Photo() {
    Post.call(this);
    this.status = "Post"
}

Photo.prototype = Object.create(Post.prototype);
Photo.prototype.constructor = Photo;

module.exports = Photo;