/* COM O WHILE
let inputTabuada = prompt('Digite o numero que você deseja ver a tabuada')

let tabuada = parseInt(inputTabuada)

let cont = 1

while (cont <=10) {
    document.write(`${tabuada} x ${cont} = ${(tabuada * cont)} <br>`)
    cont++
}
*/

// COM O FOR
let inputTabuada = prompt('Digite o numero que você deseja ver a tabuada')

let tabuada = parseInt(inputTabuada)

for (let cont = 1; cont<=10; cont++) {
    document.write(`${tabuada} x ${cont} = ${(tabuada * cont)} <br>`)
}