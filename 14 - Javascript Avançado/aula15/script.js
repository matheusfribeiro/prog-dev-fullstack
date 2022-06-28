/*

DESTRUCTURING ASSIGNMENT / desestruturaçao de atribuiçao
Facilita a desestruturaçao de objeto, ou seja, permite que voce pegue os dados de um objeto de uma maneira mais facil

*/

const obj = {
    nome: 'Fulano',
    idade: 24,
}

// const nome = obj.nome
// const idade = obj.idade

const { 
    nome: nomeDoUsuario, // ele pega a propriedade dentro do obj chamada nome e atribui o valor dela pra essa nova variável
    idade
} = obj // ele automaticamente cria uma variavel chamada nome e outra idade

console.log(nomeDoUsuario)







function transformarEmJson (response) {
    return response.json() //esse metodo json é uma promise
}

function exibirNaTela(dados){
    console.log(dados)
}

function exibirErro() {
    console.log('Ops, deu erro!')
}



const botaoCarregar = document.querySelector("#botaoCarregar")
botaoCarregar.onclick = aoClicarNoBotao

async function aoClicarNoBotao() {
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(transformarEmJson) // responsavel por transoformar os dados em json
        .catch(exibirErro)

        
        /*
        const nome = dados.name
        const email = dados.email
        const phone = dados.phone
        */
       const {name, email, phone} = dados
       console.log(name, email, phone)
}









