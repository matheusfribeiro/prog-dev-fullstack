let menuMobile = document.querySelector('.menuMobile')
let menuButton = document.querySelector('.menuButton')

let aberto = false //flag

function abrirOuFecharMenu(){
    if (aberto === false) {
        aberto = true
        menuMobile.classList.add('aberto')
        menuButton.innerText = 'fechar menu'
    } else {
        aberto = false
        menuMobile.classList.remove('aberto')
        menuButton.innerText = 'abrir menu'
    }
} 