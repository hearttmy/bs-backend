import aedes from 'aedes'
import net from 'net'

let Aedes = new aedes()
let server = net.createServer(Aedes.handle)

Aedes.on('client', (client) => {
    console.log('client connected', client.id);
})

Aedes.on('publish', function(packet, client) {
    console.log('Publish', packet.payload);
})

Aedes.on('clientReady', () => {
    console.log('A client is ready')
})

const port = 1883
server.listen(port, function () {
    console.log('server started and listening on port ', port)
})

