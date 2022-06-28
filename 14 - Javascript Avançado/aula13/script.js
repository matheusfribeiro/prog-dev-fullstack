/*

FETCH
Através do fetch fazemos as requisiçoes as API's


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

const configs = { // passado como segundo parametro no fetch
    method:'POST',
    headers: {}
}


const botaoCarregar = document.querySelector("#botaoCarregar")
botaoCarregar.onclick = () => 
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(transformarEmJson) // responsavel por transoformar os dados em json
        .then(exibirNaTela)
        .catch(exibirErro)








