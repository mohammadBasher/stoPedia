const express = require('express');

const searchNames = require('../../controlers/search/searchNames');

const router = express.Router();

router.post('/searchNames',searchNames);

module.exports = router;