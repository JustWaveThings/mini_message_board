var express = require('express');
var router = express.Router();
let messages = require('../mongoose');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Mini Messageboard' });
});
router.post('/new', function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
