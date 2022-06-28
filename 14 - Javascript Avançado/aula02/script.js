/*

HOISTING (ERGUER)

Hoisting é o comportamento padrao do javascript de mover as declaraçôes para o topo de um escopo.



*/ 

function teste() {

    outrafuncao()
    function outrafuncao() {
        console.log('outra funçao')
    }

    //voce pode chamar a funçao aqui embaixo ou em cima(antes da funçao)
    //é boa prática chamar depois da funçao
}

teste()

