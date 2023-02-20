const express = require('express');

const AuthController = require('../controllers/auth');

const router = express.Router();

//Sign up Purpose
router.post('/user/signup',AuthController.signup);

//sign in Process
router.post('/user/signin',AuthController.signin );

module.exports = router;