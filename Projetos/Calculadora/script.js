const calculadora = document.querySelector('.calculadora');
const display = document.querySelector('#display');
let erro = false;

calculadora.addEventListener('click', (e) => {
    const el = e.target;
    
    if(el.classList.contains('btn-num')){
        paraDisplay(el.textContent);
    }

    if(el.classList.contains('btn-op')){
        const operadores = ['+', '-', '*', '/', 'x', '.'];
        const ultimo = display.value.slice(-1); // último caractere do display

        if(operadores.includes(ultimo)) { // .includes - Verifica se o array contém o valor informado (ultimo)
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
    
    let conta = display.value.replace(/x/g, '*'); // Troca todos os 'x' por '*', g no regex significa “global”, ou seja, troca todas as ocorrências de 'x'.
    const ultimo = conta.slice(-1);

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