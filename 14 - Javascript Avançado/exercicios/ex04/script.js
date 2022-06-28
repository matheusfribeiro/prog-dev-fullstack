const students = [

    {
      nome: 'Maria',
      sobrenome: 'da Silva',
      nota: 10,
    },

    {
      nome: 'José',
      sobrenome: 'Moreira',
      nota: 4,
    },

    {
      nome: 'Paulo',
      sobrenome: 'Henrique',
      nota: 7,
    },

    {
      nome: 'Sara',
      sobrenome: 'Souza',
      nota: 5,
    },

    {
      nome: 'Clara',
      sobrenome: 'Barbosa',
      nota: 9,
    },

    {
      nome: 'Rodrigo',
      sobrenome: 'Barros',
      nota: 4,
    },

    {
      nome: 'Renato',
      sobrenome: 'Barros',
      nota: 7,
    },

    {
      nome: 'Andrea',
      sobrenome: 'Batista',
      nota: 6,
    },

    {
      nome: 'Carla',
      sobrenome: 'Campos',
      nota: 3,
    },

]
// cache selectors
const botao = document.querySelector('#botao')
const nota = document.querySelector("#notaInput")
const studentsList = document.querySelector('#studentsList')

// events
botao.onclick = showStudents


// functions
function showStudents(e) {
    e.preventDefault()

    const notaValue = parseInt(nota.value)
    let htmlStudents = ''
        
    const studentsFiltered = students.filter(student => student.nota === notaValue)
    
    
    for (let student of studentsFiltered){  
        htmlStudents += `<li>${student.nome} ${student.sobrenome} | Nota:${student.nota}</li>`   
    }
    
    if (!htmlStudents){
        htmlStudents += `<li>Nenhum estudante tirou esta nota!</li>`
    }
    
    studentsList.innerHTML = htmlStudents
    
}







