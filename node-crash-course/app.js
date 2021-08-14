const http = require('http')

const server = http.createServer((request, response)=>{
    if (request.url === '/') {
        response.write('Welcome to our home page')
    }
    else if (request.url === '/about') {
        response.write('Here is our short history')
    }
    else {
        response.write(`
        <h1>Oops!</h1>
        <p>We couldn't find what you are looking for </p>
        <a href ='/'> back home </a>
        `)
    }
    response.end()
    
})
server.listen(5000)