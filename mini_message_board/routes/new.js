var express = require('express');
var router = express.Router();

router.get('/new', function (req, res, next) {
  res.send('placeholder for new message form ');
});

module.exports = router;
