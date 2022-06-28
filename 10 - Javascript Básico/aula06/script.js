/*

string
number
boolean
array
object
undefined
null

*/

//string
let nome = 'Matheus'
console.log(nome)

//string concatenada
let sobrenome = 'Ribeiro'
//console.log(nome + ' ' + sobrenome)

// string literal / template string
console.log(`${nome} ${sobrenome}`)


//number 
let idade = 24
console.log(idade)
console.log(idade + 10)

//number - float
let porcentagem = 10.2
console.log(porcentagem + '%')

//boolean (true or false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

// array
let habilidades = ['Javascript', 'PHP', 'PYTHON' ]
console.log(habilidades)
console.log(habilidades.length)
console.log(habilidades[2])

//object
let pessoa = {
    nome: 'Fulano',
    sobrenome: 'De Tal',
    idade: 25,
    habilidades: ['html', 'css', 'javascript']
}

console.log(pessoa)
console.log(pessoa.sobrenome)
console.log(pessoa.habilidades[2])