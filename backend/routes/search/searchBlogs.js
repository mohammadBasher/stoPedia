const express = require('express');

const searchBlogs = require('../../controlers/search/searchBlogs');

const router = express.Router();

router.post('/searchBlogs',searchBlogs);

module.exports = router;