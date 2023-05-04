const express = require('express');
const router = express.Router();
const store = require('../controllers/store.controller');


router.get('/', store.getStores)
router.post('/updateDesignation', store.updateDesignation)

module.exports = router;