const botao = document.querySelector("#botao")
const msg = document.querySelector("#inputMsg")
const loading = document.querySelector('.loading')

function retornarPromise() {
    return new Promise((resolve, reject) => {
        
        if (msg.value){
            setTimeout(() => {
                const msgValue = msg.value
                resolve(msgValue)
            }, 5000)
            loading.style.display = 'inline'
            botao.style.display = 'none'
        } else {
            alert("Voce deve digitar uma mensagem!")
        }
    })
}

function exibirNaTela(dados) {
    document.querySelector('#text').innerHTML = dados
    msg.style.display = 'none'
    loading.style.display = 'none'
}

botao.onclick = () =>
    retornarPromise()
        .then(exibirNaTela)
        .catch()