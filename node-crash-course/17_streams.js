const { createReadStream} = require ('fs')
const stream = createReadStream('./content/big.txt')

//default 64kb
//laste buffer - remainder
//highWaterMark - control size
//const stream = createReadStream('./content/big.txt', {highWaterMark:90000})
//const stream = createReadStream('./content/big.txt', { encoding: 'utf8'})
stream.on ('data',(result) => {
    console.log(result)
})
