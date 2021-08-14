const http = require('http')

const server = http.createServer((req , res)=>{
    console.log('request event')
    res.write('Hello World')
    res.end()
})

server.listen(4000,()=>{
    console.log('Server listening at port : 4000...')
})