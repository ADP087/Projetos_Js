function menuOnClick(){
    document.querySelector('.menu-bar').classList.toggle('change');
    document.querySelector('.nav-prim').classList.toggle('change');
    document.querySelector('.menu-bg').classList.toggle('change-bg');
}

function menuSecOpen(){
    document.querySelector('.links').classList.toggle('sec-open');
    document.querySelector('#seta').classList.toggle('girar');
}

const form = document.querySelector('#form');

function criaP(){
    const p = document.createElement('p');
    return p;
}

form.addEventListener('submit', function(evento){
    evento.preventDefault();

    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);
});

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 40){
        return nivel[5];
    } 
    
    if (imc >= 35) {
        return nivel[4];
    } 
    
    if (imc >= 30) {
        return nivel[3];
    }
    
    if (imc >= 25) {
        return nivel[2];
    }
    
    if (imc >= 18.5) {
        return nivel[1];
    }
    
    if (imc < 18.5) {
        return nivel[0];
    }
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}