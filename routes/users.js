var express = require('express');
var router = express.Router();

/* GET user listing. */
router.get('/', function(req, res, next) {
  res.send(`put a name after users`);
});

router.get('/cool', function(req, res, next) {
  res.send(`You're so cool`);
});

router.get('/mom', function(req, res, next) {
    res.render('index', { title: `Mom's Site`});
});

router.get('/bro', function(req, res, next) {
    res.render('index', { title: `Sam's Site`});
});

router.get('/co', function(req, res, next) {
    res.render('index', { title: `CO's Site`});
});

router.get('/avery', function(req, res, next) {
    res.render('index', { title: `Avery's Site`});
});

module.exports = router;
