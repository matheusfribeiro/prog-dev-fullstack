/*

GLOBAL
LOCAL

- O escopo determina a visibilidade de uma variável

- As funçoes no javascript criam o seu proprio escopo
    - As variáveis de uma funçao nao sao acessiveis fora dela


*/

function test() {
    let a = 123
}

test()

console.log(a)