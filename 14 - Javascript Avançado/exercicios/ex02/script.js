const alunos = [
    {
    nome: 'Maria',
    sobrenome: 'da Silva',
    nota: 10,
    },

    {
    nome: 'José',
    sobrenome: 'Moreira',
    nota: 4,
    },

    {
    nome: 'Paulo',
    sobrenome: 'Henrique',
    nota: 7,
    },

    {
    nome: 'Pedro',
    sobrenome: 'Souza',
    nota: 5,
    },

]

/*
const alunosFinal = alunos.filter(function(aluno) {
    let retorno = false

    if (aluno.nota >= 7) {
        retorno = true
    }

    return retorno
})
*/

const alunosFinal = alunos.filter(aluno => aluno.nota >= 7 ? true : false)

console.log(alunosFinal)


