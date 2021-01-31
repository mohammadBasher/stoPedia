const express = require('express');

const search = require('../controlers/search');

const router = express.Router();

router.post('/search',search);

module.exports = router;