

function retornarPromise() {
    return new Promise((resolve, reject) => {
        const resposta = "OK, promise resolvida!"

        setTimeout(() => {
            resolve(resposta)
        }, 10000)
        
    })
}

function exibirNaTela(dados) {
    console.log(dados)
}

retornarPromise()
    .then(exibirNaTela)
    .catch()



