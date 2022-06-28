/*


LOCAL STORAGE




*/

const tarefas = [
    {tarefa: 'estudar javascript'},
    {tarefa: 'estudar node.js'},
    {tarefa: 'estudar react.js'},
]

const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('tarefas', tarefasJson)

const listaTarefasSalvas = localStorage.getItem('tarefas')

const listaTarefasObj = JSON.parse(listaTarefasSalvas)

console.log(listaTarefasObj)

