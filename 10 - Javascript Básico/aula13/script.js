let clients = [
    {
        nome: 'Matheus',
        idade: 24,
        skills: ['Javascript', 'HTML', 'CSS']
    },
    {
        nome: 'Fulano',
        idade: 35,
        skills: ['.NET', 'python', 'java']
    },
    {
        nome: 'Ciclano',
        idade: 28,
        skills: ['c++', 'c#', 'c']
    }
]

/*for (let cont = 0; cont < clients.length; cont++) {
    console.log(clients[cont].nome)
} */

let htmlClients = ''

for (let client of clients) {
    
    let skillsList = ''

    for (let skill of client.skills) {
        skillsList += `<li>${skill}</li>`
    }

    htmlClients += `
    <li>
        <b>Nome:</b> ${client.nome} <br>
        <b>Idade:</b> ${client.idade} <br>
        <b>Skills:</b><br>
        <ul>
            ${skillsList}
        </ul>
    </li>
    `

}

document.querySelector('#clientsList').innerHTML = htmlClients
