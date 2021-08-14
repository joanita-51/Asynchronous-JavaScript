const {readFile}= require('fs')

console.log("I'm going to read a file")

readFile('../content/first.txt','utf8',(err, result)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed the first task')
})
console.log('starting next task')