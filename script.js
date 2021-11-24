function addTask() {
  const item = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa').value;

  item.innerText = inputText;
  item.classList.add('item');
  document.getElementById('lista-tarefas').appendChild(item);
  document.getElementById('texto-tarefa').value = '';
}

// Define o clique como newItem
// Define todos os itens com a classe 'selected' como allSelected
// Define o primeiro elemento com a classe 'selected' como oldItem
// Confere se o elemento clicado contém a classe 'item' (limita os cliques aos elementos da lista)
// Compara se existem elementos com a classe 'selected' e se o item clicado contém a classe 'selected'
// IF: Atualiza as classes de newItem e oldItem, enquanto troca a cor do fundo dos itens
// ELSE: Caso o item clicado não tenha a classe 'selected' (primeira interação), adiciona e troca a cor de fundo
function selectedTask(event) {
  const newItem = event.target;
  const oldItem = document.querySelector('.selected');
  const allSelected = document.querySelectorAll('.selected');

  if (newItem.classList.contains('item') === true) {
    if (allSelected.length === 1 && newItem.classList.contains('selected') === false) {
      newItem.classList.add('selected');
      oldItem.classList.remove('selected');
      newItem.style.backgroundColor = 'rgb(128, 128, 128)';
      oldItem.style.backgroundColor = 'white';
    } else {
      newItem.classList.add('selected');
      newItem.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}
addEventListener('click', selectedTask);

// Filtra evento de clique somente para os itens da lista
// IF: item NÃO contém a classe "completed", adiciona a classe ao item
// ELSE IF: item CONTÉM a classe "completed", remove a classe do item
function checkTask(event) {
  const task = event.target;

  if (task.classList.contains('item') === true) {
    if (task.classList.contains('completed') === false) {
      task.classList.add('completed');
    } else if (task.classList.contains('completed') === true) {
      task.classList.remove('completed');
    }
  }
}
addEventListener('dblclick', checkTask);

function clearAll() {
  const list = document.getElementById('lista-tarefas');
  list.innerHTML = '';
}

function removeElements() {
  const list = document.getElementById('lista-tarefas').children;
  for (const item of list) {
    // Se o elemento filho tiver a classe completed
    if (item.classList.contains('completed') === true) {
      // remove o elemento
      item.remove();
    }
  }
}

function clearCompleted() {
  // Enquanto a quantidade de elementos com a classe 'completed' for diferente de zero
  while (document.getElementsByClassName('completed').length !== 0) {
    removeElements();
  }
}

// 
function saveList() {
  const lista = document.getElementById('lista-tarefas');
  console.log(lista);
  localStorage.setItem('listaSalva', lista.innerHTML);
}

function loadList() {
  if (localStorage.getItem('listaSalva')){
    const lista = document.getElementById('lista-tarefas');
    lista.innerHTML = localStorage.getItem('listaSalva');
  }
}
window.onload = loadList;
