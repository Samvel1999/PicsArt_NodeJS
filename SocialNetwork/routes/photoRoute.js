const router = require('express').Router();
const verify = require('../verifyToken');
const {upload, findAll, findById, save} = require('../controllers/photoController');

router.get('/users/:id/posts/:postId/photos', verify, findAll);
router.get('/users/:id/posts/:postId/photos/:photoId', verify, findById);
router.post('/users/posts/:id/photos', verify, upload.single('productImage'), save);

module.exports = router;