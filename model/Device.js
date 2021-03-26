const mongoose = require('../db/db')
const Schema = mongoose.Schema

const device = new Schema({
  clientId: {type: String},
  alert: {type: Number},
  info: {type: String},
  lat: {type: Number},
  lng: {type: Number},
  timestamp: {type: Number},
  value: {type: Number},
})

module.exports = mongoose.model('device', device)
