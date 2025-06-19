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
    const div = criaDiv();

    listaTarefas.appendChild(li);

    li.appendChild(div);

    div.appendChild(criaEdit(li));
    div.appendChild(criaExcluir(li));

    limpaInput();
}

// ==== Cria os elementos ====
function criaLi(texto) {
    const li = document.createElement('li');

    const p = criaP();
    p.textContent = texto;

    const checkbox = criaCheckbox();
    
    li.appendChild(checkbox);
    li.appendChild(p);

    li.addEventListener('click', function(e) {
        li.classList.toggle('clicado');
        if (e.target === checkbox) return;
        checkbox.checked = !checkbox.checked;
    })

    return li;
}

function criaCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    return checkbox;
}

function criaP() {
    const p = document.createElement('p');

    return p;
}

function criaDiv() {
    const div = document.createElement('div');
    div.setAttribute('class', 'botoes-tarefa');

    return div;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// ==== Cria os botões de editar e excluir ====
function criaEdit(li) {
    const btnEdit = document.createElement('button');
    btnEdit.textContent = 'Editar';

    btnEdit.setAttribute('class', 'edit');
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

    return btnEdit;
}

function criaExcluir(li) {
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';

    btnExcluir.setAttribute('class', 'excluir');
    btnExcluir.setAttribute('title', 'Excluir tarefa');

    btnExcluir.addEventListener('click', function() {
        li.remove();
    })

    return btnExcluir;
}