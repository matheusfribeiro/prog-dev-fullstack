/*

PROMISE
Executar uma funçao e ela vai me "prometer" chamar outra funçao quando ela terminar a execuçao dela
códigos assincronos
*/

function exibirNaTela(dados){
    console.log('exibir na tela', dados)
}

function exibirErro() {
    console.log('Ops, deu erro!')
}



const botaoCarregar = document.querySelector("#botaoCarregar")
botaoCarregar.onclick = () => 
    carregarFotos()
        .then(exibirNaTela)
        .catch(exibirErro)





function carregarFotos(){
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest() 

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200){
            
                const response = (JSON.parse(this.responseText))
        
                resolve(response)
            }

            if (this.status === 404) {
                reject()
            }
        }
        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
        xhttp.send()

    })
 
}



