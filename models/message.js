const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  message: { type: String, required: true, maxLength: 500 },
  timestamp: { type: Date, default: Date.now },
});

MessageSchema.virtual('url').get(function () {
  return `/messages/${this._id}`;
});

module.exports = mongoose.model('Message', MessageSchema);
