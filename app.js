const cors = require('@koa/cors')
const db = require('./db/db')
const koa = require('koa')
const app = new koa()
const port = 3000

app.use(cors({
  origin: "*"
}))

app.listen(port, () => {
  console.log('HTTP server start on port ' + port)
})




