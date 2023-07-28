require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.dmc0his.mongodb.net/?retryWrites=true&w=majority`;

main().catch(err => console.log(err));

export const messages = [];

async function main() {
  console.log('debug - about to connect to mongoDB');
  await mongoose.connect(mongoDB);
  console.log('debug - should be connected to mongoDB');
  const message = require('./models/message');
  await message.find({}).then(message => {
    console.log('debug - messages: ', message);
    messages.push(message);
  });
  mongoose.connection.close();
  console.log('debug - should be done with mongoDB');
}
