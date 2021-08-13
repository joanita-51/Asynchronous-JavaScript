const {readFileSync, writeFileSync}= require('fs')//the destructuring method. similar to const fs = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag :'a'}
)