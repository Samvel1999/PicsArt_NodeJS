const express = require('express');
const repositoryRouter = express.Router();

const {getCountOfRepositories} = require('../controllers/repositoryController');

repositoryRouter.get('/repo/count', getCountOfRepositories);

module.exports = {
    repositoryRouter
}