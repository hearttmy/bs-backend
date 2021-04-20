const router = require('@koa/router')()

const user = require('./routes/R_User')
const device = require('./routes/R_Device')

router.use('/user', user)
router.use('/device', device)

module.exports = router.routes()
