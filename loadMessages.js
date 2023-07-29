const Message = require('./models/message');
const fromServer = require('./mongoose');

async function loadMessages() {
  const messagesFromDB = await Message.find();

  console.log('*****  messages from database now in backend array ', messagesFromDB);
  return messagesFromDB;
}

const messagesToDisplay = loadMessages(fromServer);

module.exports = messagesToDisplay;
