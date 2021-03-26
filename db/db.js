const mongoose = require('mongoose')
const dbConfig = require('../config/config').dbConfig

mongoose.connect(dbConfig.dbURL, {useNewUrlParser: true , useUnifiedTopology: true})
  .then( () => {
    console.log("Mongodb Connected...")
  })
  .catch(err => {
    console.log(err)
  })

module.exports = mongoose






