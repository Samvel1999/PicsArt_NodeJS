const router = require('express').Router();
const {register, login, find, update} = require('../controllers/userController');
const verify = require('../verifyToken');

router.get('/', verify, find);
router.post('/register', register);
router.post('/login', login);
router.patch('/', verify, update);

module.exports = router;