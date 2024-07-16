const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * Define API routes for handling user requests
 * For example, user registration, login, profile updates, etc.
 */

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/:username', userController.updateUserProfile);

module.exports = router;