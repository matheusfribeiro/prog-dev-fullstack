let opcoes

for (let cont = 2021; cont >= 1900; cont--) {
    opcoes += `<option>${cont}</option>`
}

document.querySelector('#ano').innerHTML = opcoes


let clients = ['Zezinho', 'Luizinho', 'Huguinho' , 'Tio Patinhas']
let list = ''

for (let cont = 0; cont <= clients.length - 1; cont++) {
    list += `<li>${clients[cont]}</li>`
}
console.log(clients)

document.querySelector('#clientsList').innerHTML = list