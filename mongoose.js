require('dotenv').config();
const loadMessages = require('./loadMessages');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.dmc0his.mongodb.net/?retryWrites=true&w=majority`;

async function main() {
  console.log('debug - about to connect to mongoDB');
  await mongoose.connect(mongoDB);
  const messages = await loadMessages();
  await mongoose.connection.close();
  console.log('debug - should be done with mongoDB');
  return messages;
}

main().catch(err => console.log(err));

module.exports = main;
