const Aedes = require('aedes')()
const net = require('net')
const Device = require('../model/Device')
const Settings = require('../model/Settings')
const server = net.createServer(Aedes.handle)

Aedes.on('publish', function (packet, client) {
  const topic = packet.topic
  if (topic === 'testapp') {
    const payload = JSON.parse(packet.payload.toString())
    const device = new Device(payload)
    device.save()
      .catch(() => {
        console.log('Fail to insert!')
      })
    Settings.findOne({deviceId: payload.clientId}, function(err, doc) {
      if (err) return
      if (!doc) {
        console.log(doc)
        const setting = new Settings({deviceId: payload.clientId, deviceName: 'default'})
        setting.save()
          .catch(() => {})
      } else {
        Settings.where({deviceId: payload.clientId}).update({messageNum: doc.messageNum + 1})
      }
    })

  }
})

const port = 1883
server.listen(port, function () {
  console.log('server started and listening on port ', port)
})

module.exports = Aedes

