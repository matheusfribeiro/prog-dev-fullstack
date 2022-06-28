const count = document.querySelector("#count")
const botaoSomar = document.querySelector("#somar")
const botaoSubtrair = document.querySelector("#subtrair")

let contador = 0
let increaseInterval
let decreaseInterval

function funcaoSubtrair() {
    clearInterval(increaseInterval)

    botaoSubtrair.classList.add('off')
    botaoSomar.classList.remove('on')
    
    decreaseInterval = setInterval(function(){
        contador--
        count.innerText = contador
    }, 100)
    
}


function funcaoSomar() {
    clearInterval(decreaseInterval)

    botaoSubtrair.classList.remove('off')
    botaoSomar.classList.add('on')

    increaseInterval = setInterval(function(){
        contador++
        count.innerText = contador
    }, 100)  
}


botaoSomar.onclick = funcaoSomar
botaoSubtrair.onclick = funcaoSubtrair



