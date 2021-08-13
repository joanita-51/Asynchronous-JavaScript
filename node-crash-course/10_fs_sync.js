const { Console } = require('console')
const {readFileSync, writeFileSync}= require('fs')//the destructuring method. similar to const fs = require('fs')
console.log('Start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag :'a'}
)
console.log('done with this task')
console.log('starting the next one')