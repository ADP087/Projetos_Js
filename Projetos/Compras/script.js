function menuOnClick(){
    document.querySelector('.menu-bar').classList.toggle('change');
    document.querySelector('.nav-prim').classList.toggle('change');
    document.querySelector('.menu-bg').classList.toggle('change-bg');
}

function menuSecOpen(){
    document.querySelector('.links').classList.toggle('sec-open');
    document.querySelector('#seta').classList.toggle('girar');
}

// ===============================================

const spans = document.querySelectorAll('.botoes span');
const mais = document.querySelectorAll('.mais');
const menos = document.querySelectorAll('.menos');
const clear = document.querySelector('.limpar');
const spanTotal = document.querySelector('.vaTotal');

let total = 0;

mais.forEach(btn => {
    btn.addEventListener('click', () => {
        const produto = btn.closest('.produto');
        const spanValor = produto.querySelector('.valor');
        const span = btn.parentElement.querySelector('span');

        let valor = parseValor(spanValor.innerText);
        let quant = Number(span.innerText);

        quant++;
        total += valor;

        span.innerText = quant;
        spanTotal.innerText = total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    });
});

menos.forEach(btn => {
    btn.addEventListener('click', () => {
        const produto = btn.closest('.produto');
        const spanValor = produto.querySelector('.valor');
        const span = btn.parentElement.querySelector('span');

        let valor = Number(parseValor(spanValor.innerText));
        let quant = Number(span.innerText);

        quant--;
        if(quant < 0) {
            quant = 0;
            return;
        }
        
        total -= valor;

        span.innerText = quant;
        spanTotal.innerText = total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    });
});

function parseValor(valor) {
    return Number(valor.replace(/\./g,'').replace(',', '.'));
}

clear.addEventListener('click', () => {
    spans.forEach(span => {
        span.innerText = '0';
        spanTotal.innerText = '0,00';
        total = 0;
    });
});