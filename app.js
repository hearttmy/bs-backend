const cors = require('@koa/cors')
const mongo = require('koa-mongo')
const dbConfig = require('config/dbConfig')
const koa = require('koa')
const app = new koa()
const port = 3000

app.use(cors({
  origin: "*"
}))

app.use(mongo({
  uri: dbConfig.dbURL,
}))

app.listen(port, () => {
  console.log('HTTP server start on port ' + port)
})



