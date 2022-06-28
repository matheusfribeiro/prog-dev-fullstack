/*

SINCRONO X ASSINCRONO

*/

function primeira() {
    console.log('primeira')
}

function segunda() {
    console.log('segunda')
}

setTimeout(primeira, 2000) // ASSINCRONO
//quando o interpretador passar por essa linha, ele nao irá esperar para continuar a execuçao da segunda
//ele vai ler o código, colocar numa fila e continuar a execuçao.

segunda()