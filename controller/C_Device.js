const Device = require('../model/Device')
const Settings = require('../model/Settings')
const code = require('../config/httpCode')
const { device_online } = require('../mqtt/client')

module.exports = {
  async getPanelData (ctx) {
    const totalDeviceNum = await Settings.count()
    const totalMessageNum = await Device.count()
    const todayMessageNum = await Device.count()
    return ctx.body = {code: code.success, data: { onlineDeviceNum: device_online, totalDeviceNum, totalMessageNum, todayMessageNum  }}
  },
  async getDeviceList (ctx) {
    const deviceList = await Settings.find()
    return ctx.body = {code: code.success, data: { deviceList }}
  },
  async getData(ctx) {
    const items = await Device.find()
    return ctx.body = {code: code.success, data: {items}} 
  },
  async setDeviceName(ctx) {
    const { deviceId, deviceName } = ctx.request.body
    await Settings.updateOne({deviceId}, {deviceName})
    return ctx.body = {code: code.success}
  }
}
