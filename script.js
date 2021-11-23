console.log('Hello. World!');

function addTask() {
    let item = document.createElement('li');
    let inputText = document.getElementById('texto-tarefa').value;
    item.innerText = inputText;
    item.classList.add('item');
    document.getElementById('lista-tarefas').appendChild(item);
    document.getElementById('texto-tarefa').value = '';
}

function listClick(event) {
    if (event.target.classList.contains('item') === true) {
        let item = event.target;
        item.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}
addEventListener('click', listClick);