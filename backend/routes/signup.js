const express = require('express');

const signup = require('../controlers/signup').signup;

const router = express.Router();

const s = router.post('/signup',signup);

exports.signup = s;
