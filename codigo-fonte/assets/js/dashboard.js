 // VERIFICAR SE O USUÁRIO FEZ LOGIN OU NÃO
function verificarLogin() { 
  const storedData = JSON.parse(localStorage.getItem('userData'));
  if (storedData && (storedData.tipo === 'empregador' || storedData.tipo === 'gestor' || storedData.tipo === 'programador')) {
    console.log('Usuário logado');
} else {
  console.log('Usuário não logado');
    window.location.href = 'login.html';
}
}

// CARREGAR USUÁRIOS (FUNCIONÁRIOS) DO ARQUIVO JSON
function carregarUsuarios() {
  const selectElement = document.getElementById('categorias');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './assets/js/users.json', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      data.usuarios.forEach(function(usuario) {
        const option = document.createElement('option');
        option.value = 'user' + usuario.id;
        option.text = usuario.nome;
        selectElement.appendChild(option);
      });
    }
  };

  xhr.send();
}

// CARREGAR AS DUAS FUNÇÕES ACIMA QUANDO A PÁGINA FOR CARREGADA
function carregarPagina() {
  carregarUsuarios();
  verificarLogin();
}

window.onload = carregarPagina;

// TEXTO OCULTO MÁXIMO DE CARACTERES
const textoMaximo = document.querySelector('.textoMax');

// FUNÇÃO PARA REMOVER TAREFA
function removerTarefa(tarefa) {
  const backlog = tarefa.closest('.backlog');
  if (backlog) {
    tarefa.remove(); 
    atualizarContagemBacklog();
  } else {
    tarefa.innerHTML = '';
  }
}

// FUNÇÃO PARA ATUALIZAR CONTAGEM DE TAREFAS NO BACKLOG
function atualizarContagemBacklog() {
  const backlog = document.querySelector('.backlog');
  const currentTasks = backlog.querySelectorAll('.task').length;
  const maxTasks = 3;

  if (currentTasks < maxTasks) {
    adicionarTarefaBtn.disabled = false;
    textoMaximo.innerHTML = "";
  }
}

// FUNÇÃO PARA ADICIONAR EVENTOS DE REMOÇÃO DE TAREFAS
function adicionarEventosDeRemocao() {
  const removeButtons = document.querySelectorAll('.remover');

  removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const task = this.closest('.task');

      if (task) {
        removerTarefa(task);
      }
    });
  });
}


// ARRASTAR TAREFAS
document.addEventListener('DOMContentLoaded', (event) => {
  var dragSrcEl = null;

  function handleDragStart(e) {
    this.style.opacity = '0.1';
    this.style.border = '3px dashed #c4cad3';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('task-hover');
  }

  function handleDragLeave(e) {
    this.classList.remove('task-hover');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
      if (dragSrcEl.parentNode.classList.contains('backlog')) {
        removerTarefa(dragSrcEl);
        adicionarTarefaBtn.disabled = false;
        textoMaximo.innerHTML = "";
      }
    }
    
    adicionarEventosDeRemocao();
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    this.style.border = 'none';

    items.forEach(function (item) {
      item.classList.remove('task-hover');
      item.draggable = true;
    });
  }

  let items = document.querySelectorAll('.task');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });

  // FOTOS DOS "FUNCIONÁRIOS"
  const pessoasFotos = {
    user1: '../codigo-fonte/assets/img/user1.png',
    user2: '../codigo-fonte/assets/img/user2.png',
    user3: '../codigo-fonte/assets/img/user4.png',
    user4: '../codigo-fonte/assets/img/user3.png',
    user5: '../codigo-fonte/assets/img/user5.png',
    user6: '../codigo-fonte/assets/img/user6.png',
  };

  // ADICIONAR TAREFA
  // SELECIONAR PESSOA PARA ADICIONAR FOTO
  const selectPessoa = document.getElementById('categorias');
  const firstDiv = document.querySelector('.project-column-heading__title');
  const texto = document.querySelector('.textarea_task');
  
  const adicionarTarefaBtn = document.getElementById('adicionarTarefa');
  adicionarTarefaBtn.addEventListener('click', function() {
   // FOTO PESSOAS
    const selectedPessoa = selectPessoa.value;
    const pessoaFotoURL = pessoasFotos[selectedPessoa];
  
    const selectedTag = document.querySelector('input[name="tag"]:checked').value;
  // TIPO DE TAREFA
    const tagNames = {
      'dev': 'Desenvolvimento',
      'doc': 'Documentação',
      'call': 'Chamada'
    };

    function removerAcentos(texto) {
      return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const tagName = tagNames[selectedTag] || 'Outro';
    const tagNameWithoutAccents = removerAcentos(tagName).toLowerCase();
  
    if (texto.value.length >= 5) {
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.draggable = true;
    newTask.style.width = '320px';
    newTask.style.flexWrap = 'wrap';
    newTask.addEventListener('dragstart', handleDragStart, false);
    newTask.addEventListener('dragenter', handleDragEnter, false);
    newTask.addEventListener('dragover', handleDragOver, false);
    newTask.addEventListener('dragleave', handleDragLeave, false);
    newTask.addEventListener('drop', handleDrop, false);
    newTask.addEventListener('dragend', handleDragEnd, false);

    
    const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' });
const formattedTime = currentDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    newTask.innerHTML = `
      <div class='task__tags'><span class='task__tag task__tag--${tagNameWithoutAccents}' style="font-weight: normal;">${tagName}</span><button class="remover"><svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
      <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
    </svg></button></div>
      <p style="font-weight: normal;">${texto.value}</p>
      <div class='task__stats'>
      <span><time style="font-weight: normal;" datetime="${currentDate.toISOString()}"><i class="fas fa-flag"></i>${formattedDate} ${formattedTime}</time></span>
        <span class='task__owner'><img src="${pessoaFotoURL}" alt="${selectedPessoa}" class="task__owner"></span>
      </div>
    `;
  
    firstDiv.appendChild(newTask);

  

} else {
  
textoMaximo.innerHTML = "A tarefa deve ter no mínimo 5 caracteres";
}

const backlog = document.querySelector('.backlog');
const currentTasks = backlog.querySelectorAll('.task').length;

const maxTasks = 3;
if (currentTasks < maxTasks) {
  firstDiv.appendChild(newTask);
} else {
  adicionarTarefaBtn.disabled = true;
  textoMaximo.innerHTML = "Você atingiu o limite de tarefas no backlog! Remova ou mova alguma tarefa para continuar adicionando.";
}


adicionarEventosDeRemocao();
});
adicionarEventosDeRemocao();
});
