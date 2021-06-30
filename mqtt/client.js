const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://127.0.0.1:1883')
const server = require('./broker')
const topic_client_connect = '$SYS/' + server.id + '/new/clients'
const topic_client_disconnect = '$SYS/' + server.id + '/disconnect/clients'
let device_online = 0

client.on('connect', function () {
  client.subscribe(topic_client_connect)
  client.subscribe(topic_client_disconnect)
})

client.on('message', function (topic, message) {
  switch (topic) {
    case topic_client_disconnect:
      device_online -= 1
      break
    case topic_client_connect:
      device_online += 1
      break
  }
})

module.exports = {
  device_online: device_online,
}
