var express = require('express');
var router = express.Router();
const serverMessages = require('../mongoose');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', message: serverMessages });
});

// I don't care about the new route until I can display the messages from mongoDB on the index page

/*
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Mini Messageboard' });
});



 router.post('/new', async function (req, res, next) {
  const mess = new messageDB({
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
}); */

module.exports = router;
