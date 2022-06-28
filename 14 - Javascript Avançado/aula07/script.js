/*

JSON

Javascript object notation

XML (antes do json)


os sistemas se comunicam através do json
para isso, é necessario que o objeto javascript seja transformado por completo em uma string.
de mesmo modo, para receber um objeto json e utiliza-lo, é necessario parsea-lo

*/


const objeto = {
    nome: 'Matheus',
    idade: 24,
}

const json = JSON.stringify(objeto) // o objeto foi transformado em json

const jsonParseado = JSON.parse(json) // json transformado de volta em objeto

console.log(jsonParseado.idade)