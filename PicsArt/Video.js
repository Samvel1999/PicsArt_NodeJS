const Post = require('./Post.js');

function Video(videoLength) {
    Post.call(this);
    this.videoLength = videoLength;
}

Video.prototype = Object.create(Post.prototype);
Video.prototype.constructor = Video;

module.exports = Video;