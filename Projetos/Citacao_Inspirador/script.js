const gerar = document.querySelector('#gerarFrase');
const frase = document.querySelector('.frase');
const autor = document.querySelector('.autor');

const frases = [
    'A vida é 10% o que acontece com você e 90% como você reage a isso.',
    'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    'A única maneira de fazer um excelente trabalho é amar o que você faz.',
    'Acredite que você pode e você já está no meio do caminho.',
    'Não espere por oportunidades extraordinárias. Agarre ocasiões comuns e as faça grandes.'
];

const autores = [
    'Charles R. Swindoll',
    'Robert Collier',
    'Steve Jobs',
    'Theodore Roosevelt',
    'Orison Swett Marden'
]

function gerandoFrase(){
    const indiceAleatorio = Math.floor(Math.random() * frases.length); // Índice aleatório para acessar o array
    
    frase.textContent = frases[indiceAleatorio];
    autor.textContent = `- ${autores[indiceAleatorio]}`;
};

gerar.addEventListener('click', gerandoFrase);

gerandoFrase()