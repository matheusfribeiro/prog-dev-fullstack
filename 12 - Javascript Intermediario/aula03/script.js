

let botaoTeste = document.querySelector('#botaoTeste')

let cont = 0

function cliqueBotao(){
    cont++
    console.log('mensagem 1')

    if (cont >= 5){
        botaoTeste.removeEventListener('click', cliqueBotao)
    }
}
// ao deixar a funçao fora do evento, voce poderá reutiliza-la em outro lugar.

/* onclick
botaoTeste.onclick = cliqueBotao
*/

//addEventListener
botaoTeste.addEventListener('click', cliqueBotao)

