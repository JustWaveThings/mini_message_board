const express = require('express');
const router = express.Router();

const Message = require('../models/message');
const loadMessages = require('../loadMessages');

/* GET home page. */
router.get('/', function (req, res) {
  const fakeMessages = { name: 'fake name', message: 'fake message', timestamp: 'fake timestamp' };

  res.render('index', { title: 'Mini Messageboard', message: loadMessages ? loadMessages : fakeMessages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Mini Messageboard' });
});

router.post('/new', function (req, res, next) {
  const mess = new Message({
    message: req.body.message,
    name: req.body.name,
  });
  mess
    .save()
    .then(() => {
      console.log({ mess, req, res });
      res.redirect('/');
    })
    .catch(error => {
      console.error('Error saving message:', error);
      res.status(500).send(['Error saving message', error]);
    });
});

module.exports = router;
