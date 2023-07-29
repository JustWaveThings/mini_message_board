require('dotenv').config();
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Message = require('../models/message');
const mongoDB = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.dmc0his.mongodb.net/?retryWrites=true&w=majority`;

async function find() {
  console.log('debug - about to connect to mongoDB');
  await mongoose.connect(mongoDB);
  const messagesFromDB = await Message.find();
  console.info(messagesFromDB);
  await mongoose.connection.close();
  console.log('debug - should be done with mongoDB');
  return messagesFromDB;
}

async function add(input) {
  console.log('debug - about to connect to mongoDB');
  await mongoose.connect(mongoDB);
  const messageToDB = await input.save();
  console.info(messageToDB);
  await mongoose.connection.close();
  console.log('debug - should be done with mongoDB');
}

/* GET home page. */
router.get('/', async function (req, res) {
  try {
    const loadMessages = await find();
    console.log('* loaded messages', loadMessages);
    res.render('index', { title: 'Mini Messageboard', message: loadMessages });
  } catch (err) {
    console.log(err);
  }
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Mini Messageboard' });
});

router.post('/new', function (req, res, next) {
  const mess = new Message({
    message: req.body.message,
    name: req.body.name,
  });

  add(mess)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
});

module.exports = router;
