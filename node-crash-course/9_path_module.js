//Allows us to interact with the file paths easily
const path = require('path')

//separator
console.log(path.sep)

//join
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//basename
const base = path.basename(filePath)
console.log(base)

//resolve
const absolute = path.resolve(__dirname, 'content','subfolder')
console.log(absolute)

