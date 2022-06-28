function entrar() {
    let nome = prompt('Bem vindo, qual é o seu nome?')

    let age = prompt('E qual a sua idade?')

    if (nome === '' || age === '') {
        window.alert('Preencha os dados corretamente!')
    } else if (age >= 18) {
        document.querySelector('#title').innerHTML = `Olá, ${nome}. Você é MAIOR de idade`
    } else  {
        document.querySelector('#title').innerHTML = `Olá, ${nome}. Você é MENOR de idade`
    }
    
    if (nome === 'Neil Peart' || nome === 'neil peart') {
        document.querySelector('#subtitle').innerHTML = 'Você é o maior baterista de todos os tempos!!!'
    }
}

