function menuOnClick(){
    document.querySelector('.menu-bar').classList.toggle('change');
    document.querySelector('.nav-prim').classList.toggle('change');
    document.querySelector('.menu-bg').classList.toggle('change-bg');
}

function menuSecOpen(){
    document.querySelector('.links').classList.toggle('sec-open');
    document.querySelector('#seta').classList.toggle('girar');
}

// ================================================

const corpo = document.body;
const color = document.querySelector('#cor');

corpo.style.backgroundColor = color.value;

color.addEventListener('input', () => {
    corpo.style.backgroundColor = color.value;
});