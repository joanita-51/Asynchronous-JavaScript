const http = require('http')

//Using the Event Emitter API
const server = http.createServer()
server.on ('request', (req, res) =>{
    res.end('Welcome')
})

server.listen(5000)