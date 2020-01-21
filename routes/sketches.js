var express = require('express');
var router = express.Router();

/* GET sketch page. */
router.get('/0', function(req, res, next) {
    res.render('index', { title: 'sketch0'});
});
router.get('/1', function(req, res, next) {
    res.render('index', { title: 'sketch1'});
});
router.get('/2', function(req, res, next) {
    res.render('index', { title: 'sketch2'});
});
router.get('/3', function(req, res, next) {
    res.render('index', { title: 'sketch3'});
});
router.get('/4', function(req, res, next) {
    res.render('index', { title: 'sketch4'});
});
router.get('/5', function(req, res, next) {
    res.render('index', { title: 'sketch5'});
});
router.get('/6', function(req, res, next) {
    res.render('index', { title: 'sketch6'});
});
router.get('/7', function(req, res, next) {
    res.render('index', { title: 'sketch7'});
});
router.get('/8', function(req, res, next) {
    res.render('index', { title: 'sketch8'});
});

module.exports = router;
