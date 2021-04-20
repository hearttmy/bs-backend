const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const koa = require('koa')

const router = require('@koa/router')()
const routes = require('./router/index')

const app = new koa()
const port = 3000

app.use(cors({
  origin: "*"
}))

app.use(bodyParser())

router.use(routes)
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port, () => {
  console.log('HTTP server start on port ' + port)
})



