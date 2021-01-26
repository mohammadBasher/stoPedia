const express = require('express');

const logout = require('../controlers/logout').logout;

const router = express.Router();

const l = router.get('/logout',logout);

exports.logout = l;
