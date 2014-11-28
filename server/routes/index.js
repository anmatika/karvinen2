var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/foo', function(req, res){
    res.render('foooo', {title: 'hello world!'})
});

module.exports = router;
