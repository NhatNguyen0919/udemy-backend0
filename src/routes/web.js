const express = require('express');
const router = express.Router();
const { getHomePage, getHehe } = require('../controllers/homeController')

// khai bao route

router.get('/', getHomePage)
router.get('/bin', getHehe)

module.exports = router;
