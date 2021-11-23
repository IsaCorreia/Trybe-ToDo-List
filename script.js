function addTask() {
    let item = document.createElement('li');
    let inputText = document.getElementById('texto-tarefa').value;
    item.innerText = inputText;
    item.classList.add('item');

    document.getElementById('lista-tarefas').appendChild(item);
    document.getElementById('texto-tarefa').value = '';
}

function selectedTask (event){
    // Define newItem como o elemento clicado
    const newItem = event.target;
    // Define old Item como o elemento que tem a classe selected
    const oldItem = document.querySelector('.selected');

    // Limita os cliques aos elementos com classe 'item'
    if (newItem.classList.contains('item') === true) {
        // Se: selected tiver mais que um elemento E newItem não tiver selected
        if (document.querySelectorAll('.selected').length === 1 && newItem.classList.contains('selected') == false) {
            // adiciona .selected a newItem, remove de oldItem
            newItem.classList.add('selected'); 
            oldItem.classList.remove('selected');

            // Estiliza o newItem em cinza, oldItem em branco
            newItem.style.backgroundColor = 'rgb(128, 128, 128)';
            oldItem.style.backgroundColor = 'white';
        } else {

            // Caso não tiver selected, adiciona a classe
            newItem.classList.add('selected'); 
            newItem.style.backgroundColor = 'rgb(128, 128, 128)';
        }
    }
}
addEventListener('click', selectedTask);
