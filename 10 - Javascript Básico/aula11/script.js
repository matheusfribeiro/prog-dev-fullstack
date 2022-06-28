
let diaSemana = new Date().getDay()

console.log(diaSemana)

let nomeDiaSemana

switch(diaSemana) {
    case 0:
        nomeDiaSemana = 'DOMINGO'
        break;
    case 1:
        nomeDiaSemana = 'SEGUNDA'
        break;
    case 2:
        nomeDiaSemana = 'TERÇA'
        break;
    case 3: 
        nomeDiaSemana = 'QUARTA'
        break;
    case 4: 
        nomeDiaSemana = 'QUINTA'
        break;
    case 5:
        nomeDiaSemana = 'SEXTA'
        break;
    case 6:
        nomeDiaSemana = 'SABADO'
}

document.write(`Hoje é ${nomeDiaSemana}`)