const Device = require('../model/Device')
const Settings = require('../model/Settings')
const code = require('../config/httpCode')
const { device_online } = require('../mqtt/client')

module.exports = {
  async getPanelData (ctx) {
    const totalDeviceNum = await Settings.find().count()
    const totalMessageNum = await Device.find().count()
    const todayMessageNum = await Device.find().count()
    return ctx.body = {code: code.success, data: { onlineDeviceNum: device_online, totalDeviceNum, totalMessageNum, todayMessageNum  }}
  }

}
