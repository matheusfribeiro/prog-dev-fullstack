/*

ASYNC / AWAIT
É uma estrutura de código que permite transformar uma determinada chamada que é assincrona em sincrona

*/

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
    const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
        .then(transformarEmJson) // responsavel por transoformar os dados em json
        .catch(exibirErro)

        console.log(dados)
}









