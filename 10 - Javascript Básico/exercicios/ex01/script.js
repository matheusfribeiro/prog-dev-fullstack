let nome = prompt('Bem vindo, qual é o seu nome?')

let age = prompt('E qual a sua idade?')

if (age >= 18) {
    document.write(`Olá, ${nome}. Você é MAIOR de idade`)
} else {
    document.write(`Olá, ${nome}. Você é MENOR de idade `)
}