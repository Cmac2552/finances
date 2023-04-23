const express = require('express');
const router = express.Router();
const timeframeInfoController = require('../controllers/timeframeInfo.controller');
const multer = require('multer');
const uploads = multer({dest: 'uploads/'});

router.post('/upload', uploads.single('file'),timeframeInfoController.upload);

module.exports = router;