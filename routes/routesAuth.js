const express = require('express');
const { register, login, profile} = require('../controller/authController')
const handleAuth = require('../middleware/auth')

const router = express.Router();

router.post('/register', register);
router.post('/login',  login);
router.get('/profile', handleAuth, profile)

module.exports = router;