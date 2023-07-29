require('dotenv').config();
const Message = require('./models/message');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.dmc0his.mongodb.net/?retryWrites=true&w=majority`;

const serverMessages = [];

async function main() {
  console.log('debug - about to connect to mongoDB');
  await mongoose.connect(mongoDB);
  const messagesFromDB = await Message.find();
  serverMessages.push(...messagesFromDB);
  console.log('*****  messages from database now in backend array ', serverMessages);
  await mongoose.connection.close();
  console.log('debug - should be done with mongoDB');
}

main().catch(err => console.log(err));

module.exports = serverMessages;
