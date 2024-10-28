const { Router } = require('express');
const UserService = require('../services/user.service');

const router = Router();
const userService = new UserService();

module.exports = router;
