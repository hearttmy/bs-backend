const mongoose = require('../db/db')
const Schema = mongoose.Schema

const settings = new Schema({
  deviceId: {type: String, unique: true},
  deviceName: {type: String},
  messageNum: {type: Number, default: 0}
})

module.exports = mongoose.model('settings', settings)
