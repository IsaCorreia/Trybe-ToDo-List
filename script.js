console.log('Hello. World!');

function addTask() {
    let item = document.createElement('li');
    let inputText = document.getElementById('texto-tarefa').value;
    item.innerText = inputText;
    document.getElementById('lista-tarefas').appendChild(item);
    document.getElementById('texto-tarefa').value = '';
}