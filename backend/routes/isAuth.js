const express = require('express');

const isAuth = require('../controlers/isAuth');

const router = express.Router();

router.get('/isAuth',isAuth);

module.exports = router;