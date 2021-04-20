const User = require('../model/User')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const code = require('../config/httpCode')

module.exports = {
  async Login (ctx) {
    const { username, password } = ctx.request.body
    const findResult = await User.find({ username: username })
    if (findResult.length === 0 || password !== findResult[0].password) {
      return ctx.body = { message: '用户名或密码错误' }
    } else {
      const userInfo = {
        username: username,
        password: password,
      }
      const token = jwt.sign(userInfo, keys.secretTokenKey, { expiresIn: 3600 })
      return ctx.body = { code: code.success, data: { token: 'Bearer ' + token } }
    }
  },
  async Register (ctx) {
    const newUser = new User(ctx.request.body)
    await newUser.save()
      .then(() => {
        return ctx.body = { code: code.success }
      })
      .catch((err) => {
        return ctx.body = { message: '用户名或邮箱已被使用' }
      })
  },
}
