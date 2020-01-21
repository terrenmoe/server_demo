var express = require('express');
var router = express.Router(),
    fs = require('fs'),
    path = require('path');


/* GET wordList listing. */
router.get('/wordList', function(req, res, next) {
    res.render('index', { title: `wordList`});
});

module.exports = router;

