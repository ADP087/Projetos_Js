const mais = document.querySelectorAll('.mais');
const menos = document.querySelectorAll('.menos');
const spanTotal = document.querySelector('.vaTotal');

let total = 0;

mais.forEach(btn => {
    btn.addEventListener('click', () => {
        const produto = btn.closest('.produto');
        const spanValor = produto.querySelector('.valor');
        const span = btn.parentElement.querySelector('span');

        let valor = Number(parseValor(spanValor.innerText));
        let quant = Number(span.innerText);

        console.log(`1: ${valor}`);

        quant++;
        total += valor;

        console.log(total)

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
        total -= valor;

        if(quant < 0) {
            quant = 0;
            return;
        }

        span.innerText = quant;
        spanTotal.innerText = total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    });
});

function parseValor(valor) {
    return Number(valor.replace(/\./g,'').replace(',', '.'));
}