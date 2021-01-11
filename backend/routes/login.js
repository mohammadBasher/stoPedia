const express = require('express');

const login = require('../controlers/login').login;

const router = express.Router();

const l = router.post('/login',login);

exports.login = l;
