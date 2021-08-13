//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require("./4_names")
const sayHi = require("./5_utilies")
const data = require("./6_alternative")
console.log(data)

sayHi('susan')
sayHi(names.anita)
sayHi(names.angel)
