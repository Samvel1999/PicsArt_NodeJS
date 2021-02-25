const express = require('express');
const router = express.Router();
const controller = require('../../controllers/userController');

//Gets All Members
router.get('/', controller.findAll);

//Get Single Member
router.get('/:id', controller.findById);

//Search user with patten
router.get('/pattern/:pattern', controller.searchUser);

//Create Member
router.post('/', controller.createUser);

//Update Member
router.put('/:id', controller.updateById);

//Delete Member
router.delete('/:id', controller.deleteById);

module.exports = router;