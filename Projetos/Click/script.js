let contador = 0;
const resultado = document.querySelector('.numero');

function criaP(texto){
    const p = document.createElement('p');
    p.textContent = texto

    return p;
}

function mensagem(){
    const p = criaP(contador);

    resultado.appendChild(p);
}

// ==== Botão MAIS
const mais = document.querySelector('#mais');

mais.addEventListener('click', function(){
    contador++;

    resultado.textContent = contador + ' Clicks';
});

// ==== Botão RESET
const resetar = document.querySelector('#reset');

resetar.addEventListener('click', function(){
    contador = 0;

    resultado.textContent = 0;
});

mensagem();