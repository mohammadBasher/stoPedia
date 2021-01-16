const express = require('express');

const editor = require('../controlers/editor');

const router = express.Router();

router.post('/editor',editor);

module.exports = router;