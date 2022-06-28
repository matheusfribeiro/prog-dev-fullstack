/*

AJAX - 2005

Asynchonous Javascript and XML

É uma técnica que permite que façamos requisiçoes aos servidores



API
Composta de um endereço onde ela está hospedada
ROTAS / ENDPOINT - Determinado caminho para obter uma informaçao
Essas rotas sao feitas para serem consumidas através de um sistema(programaçao). Nao sao acessiveis pelo navegador.


MÉTODOS (Quando fizer uma request a um determinado servidor existem alguns tipos de metodos)
Get - obter dados
Post - enviando dados pra api poder cadastrar

*/

const xhttp = new XMLHttpRequest() // esse método é uma classe, é necessário instanciar a classe através do operador NEW
// dentro do "xhttp" que é um objeto, tem-se a possibilidade de abrir uma conexao com um determinado servidor


/* 
MANIPULANDO OS DADOS QUE O SERVIDOR RESPONDEU (NESSE CASO, FOTOS)
-


Existe um metodo dentro do "xhttp" (onreadystatechange), que serve para poder passar uma funçao para esse metodo, e essa funçao vai ser executada quando terminar a execuçao da requisiçao (.open)

Esse método deve ser passado ANTES DA REQUISIÇAO abaixo
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
xhttp.send()

Esse método (onreadystatechange) deve ser atribuido a uma funçao
o this nesse caso, vai se referenciar ao proprio objeto xhttp
Dentro dele, tem essa propriedade 'responseText'

*/
const titulo = document.querySelector('#titulo')
const imagem = document.querySelector('#imagem')

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
    /*
    O onreadystatechange fica chamando a funçao até que tenha uma resposta.
    Esse if faz com que ele entre no nosso console log somente quando ele terminar a requisiçao e ela estiver com sucesso.
    this.readyState == 4 (o código 4 se refere a quando estiver finalizada a execuçao)
    this.status == 200 (a resposta do servidor for igual a 200 que indica que deu tudo certo)
    */    
        const response = (JSON.parse(this.responseText))// ele vem em string, por isso o parse.

        console.log(response[0]) // monstra a primeira posiçao do array
        titulo.innerHTML = response[1].title
        imagem.src = response[1].url
    }
}






xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
/*
.open é uma funçao e como parametros devemos passar o Método da requisiçao(GET/POST...), o endereço de quem estamos chamando e como terceiro parametro é dizer se é assincrono (true) ou sincrono.
*/
xhttp.send()
//o open ja estabelece a conexao, mas temos que enviar essa conexao com o SEND


