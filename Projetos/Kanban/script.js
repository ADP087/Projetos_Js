function menuOnClick(){
    document.querySelector('.menu-bar').classList.toggle('change');
    document.querySelector('.nav-prim').classList.toggle('change');
    document.querySelector('.menu-bg').classList.toggle('change-bg');
}

function menuSecOpen(){
    document.querySelector('.links').classList.toggle('sec-open');
    document.querySelector('#seta').classList.toggle('girar');
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    });

    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
    });
});

document.querySelectorAll('.colun').forEach(coluna => {
    coluna.addEventListener('dragover', e => {
        e.preventDefault();

        coluna.classList.add('card-hover');
    });

    coluna.addEventListener('dragleave', e => {
        e.preventDefault();

        coluna.classList.remove('card-hover');
    })

    coluna.addEventListener('drop', e => {
        e.preventDefault();
        coluna.classList.remove('card-hover');

        const newCard = document.querySelector('.card.dragging');
        coluna.querySelector('.colun-cards').appendChild(newCard);
    });
});