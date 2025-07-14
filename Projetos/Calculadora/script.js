function menuOnClick(){
    document.querySelector('.menu-bar').classList.toggle('change');
    document.querySelector('.nav-prim').classList.toggle('change');
    document.querySelector('.menu-bg').classList.toggle('change-bg');
}

function menuSecOpen(){
    document.querySelector('.links').classList.toggle('sec-open');
    document.querySelector('#seta').classList.toggle('girar');
}

const calculadora = document.querySelector('.calculadora');
const display = document.querySelector('#display');
let erro = false;

calculadora.addEventListener('click', (e) => {
    const el = e.target;
    
    if(el.classList.contains('btn-num')){
        paraDisplay(el.textContent);
    }

    if(el.classList.contains('btn-op')){
        const operadores = ['+', '-', '*', '/', 'x', 'X', '.'];
        const ultimo = display.value.slice(-1); // último caractere do display

        if (!display.value) {
            if(el.textContent === '-' || el.textContent === '+') {
                paraDisplay(el.textContent);
                return;
            }

            return;
        }

        if(operadores.includes(ultimo)) { // .includes - Verifica se a variavel 'ultimo' é um dos elementos do array 'operadores'
            return;
        }

        paraDisplay(el.textContent);
    }

    if(el.classList.contains('btn-clear')){
        limparInput();
    }

    if(el.classList.contains('btn-del')){
        delUm();
    }

    if(el.classList.contains('btn-res')){
        resConta();
    }
});

calculadora.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        if (!display.value) {
            return;
        }

        resConta();
    }
});

function paraDisplay(valor) {
    if(erro) {
        display.value = '';
        erro = false;
    }

    display.value += valor;
}

function limparInput() {
    display.value = '';
}

function delUm() {
    display.value = display.value.slice(0, -1); // .slice - Pegue a string do início (0) até o penúltimo (-1) caractere
}

function resConta() {
    if (!display.value) {
        return;
    }

    let conta = display.value.replace(/x/gi, '*'); // Troca todos os 'x' por '*', g no regex significa “global”, ou seja, troca todas as ocorrências de 'x'. E o i deixa todas as letras minusculas

    const ultimo = display.value.slice(-1); // último caractere do display

    if(isNaN(ultimo)) {
        conta += '0';
    }

    if(ultimo == '/') {
        conta += '1';
    }

    try {
        let resultado = math.evaluate(conta); // math.evaluate - é a função da biblioteca
        display.value = resultado;
    } catch (e) {
        display.value = 'Conta inválida!';
        erro = true;
    }

    display.focus();
}

calculadora.addEventListener('click', () => {
    display.focus();
});

document.addEventListener('DOMContentLoaded', () => {
    display.focus();
});