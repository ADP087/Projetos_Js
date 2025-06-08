const corpo = document.body;
const color = document.querySelector('#cor');

const defaultColor = '#000000';
corpo.style.backgroundColor = defaultColor;

// Sempre que o usuário mexe no input, a cor munda automaticamente
color.addEventListener('input', function mudarCor() {
    corpo.style.backgroundColor = color.value;
});