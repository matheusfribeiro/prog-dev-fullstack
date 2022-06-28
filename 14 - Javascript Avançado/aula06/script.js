const clientes = [
    { name: 'Fulano', score: 34 },
    { name: 'Beltrano', score: 38  },
    { name: 'Ciclano', score: 80  },
    { name: 'Joao', score: 50  },
    { name: 'Jose', score: 98  },
]

//acc = acumulator
//curr = current
const clientesFinal = clientes.reduce((acc, curr) => {
    if (curr.score >= 50) {
        acc.pass.push(curr)
    } else {
        acc.fail.push(curr)
    }

    return acc
}, {
    pass: [],
    fail: []
})

console.log(clientesFinal)


const numeros = [1, 2, 3, 4]

const numerosFinal = numeros.reduce((acc, curr) =>  {

    if (numeros.indexOf(curr) < numeros.indexOf(numeros.length)) {
        acc += `${curr + 1} - `

    } else {
        acc += `${curr + 1}`
    }

    return acc

}, '')

console.log(numerosFinal)

