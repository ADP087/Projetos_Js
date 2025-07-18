function menuOnClick(){
    document.querySelector('.menu-bar').classList.toggle('change');
    document.querySelector('.nav-prim').classList.toggle('change');
    document.querySelector('.menu-bg').classList.toggle('change-bg');
}

function menuSecOpen(){
    document.querySelector('.links').classList.toggle('sec-open');
    document.querySelector('#seta').classList.toggle('girar');
}

// =============================================

const gerar = document.querySelector('#gerarFrase');
const frase = document.querySelector('.frase');
const autor = document.querySelector('.autor');

const frases = [
    "Tudo posso naquele que me fortalece.",
    "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de lhes causar dano, planos de dar-lhes esperança e um futuro.",
    "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.",
    "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
    "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração.",
    "Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
    "A vida é realmente simples, mas insistimos em torná-la complicada.",
    "A única limitação para o nosso reconhecimento de amanhã são as nossas dúvidas e hesitações de hoje.",
    "A vida é 10% o que acontece conosco e 90% como reagimos",
    "Falar é fácil. Mostre-me o código.",
    "Qualquer tolo pode escrever um código que um computador entenda. Bons programadores escrevem códigos que humanos entendam.",
    "Experiência é o nome que todos dão aos seus erros.",
    "A função de um bom software é fazer com que o complexo pareça simples."
];

const autores = [
    "Filipenses 4:13",
    "Jeremias 29:11",
    "Provérbios 3:5",
    "Isaías 41:10",
    "Romanos 12:12",
    "Josué 1:9",
    "Steve Jobs",
    "Dalai Lama",
    "Confúcio",
    "Franklin D. Roosevelt",
    "Charles R. Swindoll",
    "Linus Torvalds",
    "Martin Fowler",
    "Oscar Wilde",
    "Grady Booch"
]

function gerandoFrase(){
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    
    frase.textContent = frases[indiceAleatorio];
    autor.textContent = `- ${autores[indiceAleatorio]}`;
};

gerar.addEventListener('click', gerandoFrase);

gerandoFrase()