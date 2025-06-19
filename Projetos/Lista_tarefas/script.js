const inputTarefa = document.querySelector('#input-tarefa');
const btnAdicionar = document.querySelector('.botao-ind');
const listaTarefas = document.querySelector('#lista-tarefas');


inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;

        criaTarefa(inputTarefa.value);
    }
})

btnAdicionar.addEventListener('click', function() {
    if(!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
})

function criaTarefa(texto) {
    const li = criaLi(texto);

    listaTarefas.appendChild(li);

    criaEdit(li);
    criaExcluir(li);
    limpaInput();
}

function criaLi(texto) {
    const li = document.createElement('li');
    li.addEventListener('click', function() {
        li.classList.toggle('clicado');
    })

    const p = criaP();
    p.textContent = texto;

    li.appendChild(p);

    return li;
}

function criaP() {
    const p = document.createElement('p');

    return p;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaEdit(li) {
    const btnEdit = document.createElement('button');
    btnEdit.textContent = 'Editar';

    btnEdit.setAttribute('class', 'botao-ind edit');
    btnEdit.setAttribute('title', 'Editar tarefa');

    btnEdit.addEventListener('click', function() {
        const p = li.querySelector('p');
        if (p) {
            const novoTexto = prompt('Edite o texto:', p.textContent);
            if (novoTexto !== null && novoTexto.trim() !== '') {
                p.textContent = novoTexto;
            }
        }
    })

    li.appendChild(btnEdit);
}

function criaExcluir(li) {
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';

    btnExcluir.setAttribute('class', 'botao-ind excluir');
    btnExcluir.setAttribute('title', 'Excluir tarefa');

    btnExcluir.addEventListener('click', function() {
        li.remove();
    })

    li.appendChild(btnExcluir);
}