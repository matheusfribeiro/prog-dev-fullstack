let count = document.querySelector("#count")
let somar = document.querySelector("#somar")
let subtrair = document.querySelector("#subtrair")

let contador = 0

function funcaoSomar() {
    contador++
    count.innerHTML = contador
}

function funcaoSubtrair() {
    contador--
    count.innerHTML = contador
}

somar.onclick = funcaoSomar
subtrair.onclick = funcaoSubtrair

count.innerHTML = contador


