const Photo = require('./Photo.js');
const Video = require('./Video.js');
const Comment = require('./Comment.js');

const photoStatus = {
    post: 'Post',
    backgroundPhoto: 'Background photo',
    profilePhoto: 'Profile photo'
}

function User(name, surname, username, age) {
    this.status = 'unverified';
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.age = age;
    this.photos = [];
    this.videos = [];
    this.followers = [];
    this.following = [];
    this.sharedPosts = [];
    this.backgroundPhoto = undefined;
    this.profilePhoto = undefined;
}

User.prototype.addPhoto = function (photo) {
    if(photo.constructor !== Photo || this.status === 'unverified' || this.status === 'blocked') {
        if(this.status === 'blocked') {
            console.log("Blocked user");
        }
        else if(this.status === 'unverified') {
            console.log('unverified user');
        }
        else {
            console.log("Wrong data");
        }
        return;
    }

    this.photos.push(photo);
}
User.prototype.deletePhoto = function(photo) {
    if(photo.constructor !== Photo || this.status === 'unverified' || this.status === 'blocked') {
        if(this.status === 'blocked') {
            console.log("Blocked user");
        }
        else if(this.status === 'unverified') {
            console.log('unverified user');
        }
        else {
            console.log("Wrong data");
        }
        return;
    }
    for(let i = 0; i < this.photos.length; i++) {
        if(this.photos[i] === photo) {
            this.photos.splice(i, 1);
            break;
        }
    }
}
User.prototype.setBackgroundPhoto = function (photoId) {
    if(photoId >= this.photos.length) {
        console.log("Wrong index of photo");
        return;
    }
    if(this.backgroundPhoto !== undefined) {
        this.backgroundPhoto.status = photoStatus.post;
    }

    this.backgroundPhoto = this.photos[photoId];
    this.backgroundPhoto.status = photoStatus.backgroundPhoto;
}
User.prototype.setProfilePhoto = function (photoId) {
    if(photoId >= this.photos.length) {
        console.log("Wrong index of photo");
        return;
    }
    if(this.profilePhoto !== undefined) {
        this.profilePhoto.status = photoStatus.post;
    }

    this.profilePhoto = this.photos[photoId];
    this.profilePhoto.status = photoStatus.profilePhoto;
}
User.prototype.addVideo = function (video) {
    if(video.constructor !== Video || this.status === 'unverified' || this.status === 'blocked') {
        if(this.status === 'blocked') {
            console.log("Blocked user");
        }
        else if(this.status === 'unverified') {
            console.log('unverified user');
        }
        else {
            console.log("Wrong data");
        }
        return;
    }

    this.videos.push(video);
}
User.prototype.deleteVideo = function(video) {
    if(video.constructor !== Video || this.status === 'unverified' || this.status === 'blocked') {
        if(this.status === 'blocked') {
            console.log("Blocked user");
        }
        else if(this.status === 'unverified') {
            console.log('unverified user');
        }
        else {
            console.log("Wrong data");
        }
        return;
    }
    for(let i = 0; i < this.videos.length; i++) {
        if(this.videos[i] === video) {
            this.videos.splice(i, 1);
            break;
        }
    }
}
User.prototype.addComment = function(comment, post) {
    if(comment.constructor !== Comment || (post.constructor !== Photo && post.constructor !== Video)
        || this.status === 'unverified' || this.status === 'blocked') {
        if(this.status === 'blocked') {
            console.log("Blocked user");
        }
        else if(this.status === 'unverified') {
            console.log('unverified user');
        }
        else {
            console.log("Wrong data");
        }
        return;
    }

    post.comments.push(comment);
}
User.prototype.follow = function (user) {
    if(user.constructor !== User || this.status === 'unverified' || this.status === 'blocked') {
        if(this.status === 'blocked') {
            console.log("Blocked user");
        }
        else if(this.status === 'unverified') {
            console.log('unverified user');
        }
        else {
            console.log("Wrong data");
        }
        return;
    }
    this.following.push(user);
    user.followers.push(this);
}
User.prototype.likePost = function (post) {
    if(post.constructor !== Photo && post.constructor !== Video || this.status === 'unverified' || this.status === 'blocked') {
        if(this.status === 'blocked') {
            console.log("Blocked user");
        }
        else if(this.status === 'unverified') {
            console.log('unverified user');
        }
        else {
            console.log("Wrong data");
        }
        return;
    }

    post.numberOfLikes++;
}
User.prototype.sharePost = function (post) {
    if((post.constructor !== Photo && post.constructor !== Video) || this.status === 'unverified' || this.status === 'blocked') {
        if(this.status === 'blocked') {
            console.log("Blocked user");
        }
        else if(this.status === 'unverified') {
            console.log('unverified user');
        }
        else {
            console.log("Wrong data");
        }
        return;
    }

    this.sharedPosts.push(post);
    post.numberOfShares++;

}

module.exports = User;
