const clientes = [
    { name: 'Fulano', lastName: 'Da Silva'},
    { name: 'Beltrano', lastName: 'Santos'},
    { name: 'Ciclano', lastName: 'Moreira'},
]

// ['Fulano da Silva', 'Ciclano Santos']

let clientesFinal = []

clientes.forEach(function(cliente){
    clientesFinal.push(cliente.name + ' ' + cliente.lastName)
})

console.log(clientesFinal)


const clientesFinalMap = clientes.map(function(cliente){
    return cliente.name + ' ' + cliente.lastName
})
// Arrow function
//const clientesFinalMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastName)

console.log(clientesFinalMap)