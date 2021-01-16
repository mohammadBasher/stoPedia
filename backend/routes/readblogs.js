const express = require('express');

const readblogs = require('../controlers/readblogs');

const router = express.Router();

router.get('/readblogs',readblogs);

module.exports = router;
