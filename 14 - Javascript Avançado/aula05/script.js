const clientes = [
    { name: 'Fulano', lastName: 'Da Silva', age: 14 },
    { name: 'Beltrano', lastName: 'Santos', age: 18 },
    { name: 'Ciclano', lastName: 'Moreira', age: 20 },
]

/*
const clientesMaiores = clientes.filter(function(cliente) {
    let retorno = false 

    if (cliente.age >= 18) {
        retorno = true
    }

    return retorno
})

COM ARROW FUNCTION
const clientesMaiores = clientes.filter((cliente) => {
    // IF ternário
    return cliente.age >= 18 ? true : false
})
*/

const clientesMaiores = clientes.filter(cliente => cliente.age >= 18)

console.log(clientesMaiores)