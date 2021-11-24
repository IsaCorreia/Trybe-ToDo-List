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

            // Caso não tiver nenhum selected, adiciona a classe
            newItem.classList.add('selected'); 
            newItem.style.backgroundColor = 'rgb(128, 128, 128)';
        }
    }
}
addEventListener('click', selectedTask);

function checkTask (event) {
    const task = event.target;
    // Filtra evento de clique somente para os itens da lista
    if (task.classList.contains('item') === true) {
        // Se o item NÃO contém a classe "completed"
        if (task.classList.contains('completed') === false) {
            // Adiciona a classe ao item
            task.classList.add('completed');

        // Se o item CONTÉM a classe "completed"
        } else if (task.classList.contains('completed') === true) {
            // Remove a classe do item
            task.classList.remove('completed');
        }
    }
}
addEventListener('dblclick', checkTask);

function clearAll() {
    const list = document.getElementById('lista-tarefas');
    list.innerHTML='';
}

function clearCompleted() {
    const list = document.getElementById('lista-tarefas').children;

    while (document.getElementsByClassName('completed').length !== 0) {
        // Percorre a lista, retornando o elemento filho em si
        for (let item of list) {
            // Se o elemento filho tiver a classe completed
            if (item.classList.contains('completed') === true) {
                // remove o elemento
                item.remove();
            }
        }
    }
}
