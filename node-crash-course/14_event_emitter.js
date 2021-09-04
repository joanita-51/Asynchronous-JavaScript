//Events
const EventEmitter = require('events')

const customEmitter = new EventEmitter

customEmitter.on ('response', (name, id)=>{
    console.log(`data received !! User ${name} with id ${id}`)
})

customEmitter.emit('response', 'Joanita', 9)