const aedes = require('aedes')
const net = require('net')
const Device = require('../model/Device')

const Aedes = new aedes()
const server = net.createServer(Aedes.handle)

Aedes.on('publish', function (packet, client) {
  const topic = packet.topic
  if (topic === 'testapp') {
    const payload = JSON.parse(packet.payload.toString())
    const device = new Device(payload)
    device.save()
      .catch(() => {
        console.log("Fail to insert!")
      })
  }
})

const port = 1883
server.listen(port, function () {
  console.log('server started and listening on port ', port)
})

