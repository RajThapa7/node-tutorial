//Modules
const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative')

require('./mind-grenade')
sayHi(names.john)
sayHi('Karim')
sayHi(names.peter)
sayHi(data.singlePerson.name)
sayHi(data.items[0])