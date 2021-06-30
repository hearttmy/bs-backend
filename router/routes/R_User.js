const router = require('@koa/router')()

const C_User = require('../../controller/C_User');

router.post('/login',C_User.login);
router.post('/register', C_User.register)
module.exports = router.routes();
