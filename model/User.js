const mongoose = require('../db/db')
const Schema = mongoose.Schema

const user = new Schema({
  id: {type: String, require: true, unique: true},
  account: {type: String},
  password: {type: String},
  userName: {type: String},
  userType: {type: Number, default: 0},
})

module.exports = mongoose.model('User', user)
