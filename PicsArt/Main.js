const Admin = require('./Admin.js');
const Comment = require('./Comment.js');
const Photo = require('./Photo.js');
const Post = require('./Post.js');
const Video = require('./Video.js');
const User = require('./User.js');

let user1 = new User('Samvel', 'Khachatryan', 'Samvel111', 21);

let admin = new Admin('Ani', 'Hovsepyan', 'Ani_Hov', 35);
admin.verifyUser(user1);

let photo1 = new Photo();
let photo2 = new Photo();

user1.addPhoto(photo1);
user1.addPhoto(photo2);

let comment1 = new Comment("Good photo!!!");
user1.addComment(comment1, photo1);

let video1 = new Video(1.5);
let video2 = new Video(0.5);
user1.addVideo(video1);
user1.addVideo(video2);

let user2 = new User('Armen', 'Harutyunyan', 'Arm_34', 26);
let photo3 = new Photo();
admin.verifyUser(user2);
user2.addPhoto(photo3);

user1.likePost(photo3);
user1.sharePost(photo3);
user2.follow(user1);

user1.setBackgroundPhoto(0);
user1.setProfilePhoto(1);

console.log(user1);