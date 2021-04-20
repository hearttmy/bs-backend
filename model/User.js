const mongoose = require('../db/db')
const Schema = mongoose.Schema

const user = new Schema({
  username: {type: String, require: true, unique: true},
  email: {type: String, require: true, unique: true},
  password: {type: String, require: true},
  userType: {type: Number, default: 0},
})

module.exports = mongoose.model('user', user)
