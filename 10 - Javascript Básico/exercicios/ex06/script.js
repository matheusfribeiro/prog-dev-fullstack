let listaAtores = [
    {
      nome: 'Keanu Reeves',
      personagem: 'Neo',
      filme: 'The Matrix', 
    },
    { 
      nome: 'David Prowse',
      personagem: 'Darth Vader',
      filme: 'Star Wars Episódios IV-VI',
    },
    {
      nome: 'Bruce Wayne',
      personagem: 'Batman',
      filme: 'Batman - O Início'
    },
  ]

let htmlAtores = ''

for (cont = 0; cont < listaAtores.length; cont++) {
  let ator = listaAtores[cont]
  let nome = ator.nome
  let personagem = ator.personagem
  let filme = ator.filme

  htmlAtores += `
  <div class="actor">
    <h1> ${nome} </h1>
    <p> Interpretou o personagem ${personagem} no filme ${filme}</p>
  </div>  
  `
}

document.querySelector('#container').innerHTML = htmlAtores