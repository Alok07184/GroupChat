const express = require('express');

const chatController = require('../controllers/chating');
const idAuthentication = require('../middleware/checker');

const router = express.Router();

//post new messages
router.post('/chat/messages', idAuthentication.authenticate, chatController.postMessage)

//get all messages
router.get('/chat/messages', idAuthentication.authenticate,chatController.getMessage)

module.exports = router;