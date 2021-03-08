const router = require('express').Router();
const verify = require('../verifyToken');
const {findAll, findAllMyPosts, findAllPostsOfSpecificUser, findPostOfSpecificUser,
     find, save, update, remove} = require('../controllers/postController');

router.get('/posts', findAll);
router.get('/users/posts', verify, findAllMyPosts);
router.get('/users/:id/posts', verify, findAllPostsOfSpecificUser);
router.get('/users/:id/posts/:postId', verify, findPostOfSpecificUser);
router.get('/users/posts/filter', verify, find);
router.post('/users/posts', verify, save);
router.patch('/users/posts/:id', verify, update);
router.delete('/users/posts/:id', verify, remove);

module.exports = router;