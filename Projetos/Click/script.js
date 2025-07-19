function menuOnClick(){
    document.querySelector('.menu-bar').classList.toggle('change');
    document.querySelector('.nav-prim').classList.toggle('change');
    document.querySelector('.menu-bg').classList.toggle('change-bg');
}

function menuSecOpen(){
    document.querySelector('.links').classList.toggle('sec-open');
    document.querySelector('#seta').classList.toggle('girar');
}

// =====================================================

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

    resultado.textContent = contador;
});

// ==== Botão MENOS
const menos = document.querySelector('#menos');

menos.addEventListener('click', function(){
    contador--;

    if(contador == 0 || contador < 0) {
        contador = 0;
        resultado.textContent = contador;
        return;
    }

    resultado.textContent = contador;
});

// ==== Botão RESET
const resetar = document.querySelector('#reset');

resetar.addEventListener('click', function(){
    contador = 0;

    resultado.textContent = 0;
});

mensagem();