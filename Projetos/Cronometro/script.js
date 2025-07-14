function menuOnClick(){
    document.querySelector('.menu-bar').classList.toggle('change');
    document.querySelector('.nav-prim').classList.toggle('change');
    document.querySelector('.menu-bg').classList.toggle('change-bg');
}

function menuSecOpen(){
    document.querySelector('.links').classList.toggle('sec-open');
    document.querySelector('#seta').classList.toggle('girar');
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let horas = 0;
let min = 0;
let seg = 0;
let ms = 0;

let timer;

function iniciarTimer() {
    if (!timer) {
        timer = setInterval(function () {
            ms++;

            if (ms >= 100) {
                ms = 0;
                seg++;
            }
            if (seg >= 60) {
                seg = 0;
                min++;
            }
            if (min >= 60) {
                min = 0;
                horas++;
            }

            relogio.style.color = 'black';

            relogio.innerHTML = (horas > 0 ? `${horas.toString().padStart(2, '0')}:` : '') + `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}<span>:${ms.toString().padStart(2, '0')}</span>`;
        }, 10);
    }
}

//==== Funções do cronômetro ====//
document.addEventListener('click', function (e) {
    const elemento = e.target;

    if (elemento.classList.contains('iniciar')) {
        iniciarTimer();
    }

    if (elemento.classList.contains('pausar')) {
        clearInterval(timer);
        timer = null;
        relogio.style.color = 'red';
    }

    if (elemento.classList.contains('zerar')) {
        clearInterval(timer);
        horas = 0;
        min = 0;
        seg = 0;
        ms = 0;
        timer = null;
        relogio.style.color = 'black';
        relogio.innerHTML = '00:00<span>:00</span>';
    }
});