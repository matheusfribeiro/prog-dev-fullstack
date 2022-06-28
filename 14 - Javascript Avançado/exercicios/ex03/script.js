const aluno = {
    nome: 'Maria',
    sobrenome: 'da Silva',
    notas: [7, 10, 8, 5, 7, 9],
}
const bi = aluno.notas.length


const somaNotas = aluno.notas.reduce((acc, curr) => {
    return acc + curr
}, 0) // se voce quiser que ele retorne uma string, o segundo paramentro deve ser uma string. Se for um numero, zero. se for um array, um array, um objeto...

const media = (somaNotas / bi)



console.log(`A média da ${aluno.nome} foi ${media} para um total de ${bi} bimestres`)
