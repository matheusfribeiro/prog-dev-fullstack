let inputNota1 = prompt('Digite a primeira nota')

let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2

console.log(media)

if (media >= mediaMinima) {
    document.write ('Ok, passou de ano.')
} else if (media < mediaMinima) {
    document.write('Ops, reprovado.')
}

document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write('Excelente, continue assim!')
} else if (media >= mediaMinima && media === 9)  {
    document.write('Voce mandou bem! Vamos tentar chegar no 10')
} else if (media < mediaMinima && media === 6) {
    document.write('Precisamos melhorar um pouco para alcançar a media.')
} else if (media < mediaMinima && media === 3) {
    document.write('Voce foi muito mal, estude mais da próxima vez.')
}