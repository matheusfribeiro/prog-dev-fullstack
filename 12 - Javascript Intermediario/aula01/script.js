
// SELETOR POR ID
document.querySelector('#titulo').innerHTML = 'EXEMPLO'

// SELETOR POR TAG - nao precisa de #, apenas a tag
document.querySelector('a').innerHTML = 'teste ancora'

// SELECIONANDO MAIS DE 1 ITEM POR TAG
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ //funçao anonima / callback
    elemento.innerHTML = 'teste'
})

// SELECIONANDO MAIS DE 1 ITEM POR CLASSE

let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
    box.innerHTML = 'box' + (index + 1)
})