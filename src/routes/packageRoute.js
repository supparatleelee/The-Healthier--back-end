const express = require('express');
const packageController = require('../controllers/packageController');

const router = express.Router();

router.get('/', packageController.getPackagess);

module.exports = router;
