/*


ARROW FUNCTIONS

As funções de seta nos permitem escrever uma sintaxe de funçao mais curta

*/

// retorno implicito
const soma = (param1, param2) =>  param1 + param2


const resultado = soma(11, 2)

console.log(resultado)

// quando tem apenas 1 parametro, pode remover o parenteses
const teste = param1 => {
    return param1    
}
// ou const teste = param1 => param1 

console.log(teste('ok'))



// O this nesse caso vai ser o window, o escopo do this será sempre o escopo de qm chamou ela, onde ela estiver declarada (arrow function)
const botao = document.querySelector('#botao')

botao.onclick = () => {
    console.log(this)
}