
let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')
let outputText = document.querySelector('#outputText')


// Por eventListener
function meuToast() {
    let inputText = document.querySelector('#inputText').value

    toast.classList.add('visible')
    outputText.innerHTML = `Tarefa ${inputText} cadastrada com sucesso`

    setTimeout(function(){
        toast.classList.remove('visible')
    }, 5000)
}

botaoCadastrar.addEventListener('click', meuToast)


/* Por funçao anonima chamada no click
botaoCadastrar.onclick = function() {
    let inputText = document.querySelector('#inputText').value
    
    toast.classList.add('visible')
    outputText.innerHTML = `Tarefa ${inputText} cadastrada com sucesso `

    setTimeout(function(){
        toast.classList.remove('visible')
    }, 5000)
}
*/
