const router = require('@koa/router')()

const C_User = require('../../controller/C_User');

router.post('/login',C_User.Login);
router.post('/register', C_User.Register)
module.exports = router.routes();
