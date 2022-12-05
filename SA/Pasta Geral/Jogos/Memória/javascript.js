let points = 0
let tentativas = 0
let pontuaçãoFinal = 0
let pontosUser
let lastScore = 0




const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length === 20) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! seu tempo foi: ${timer.innerHTML}segundos`);

        alert(`Pontuação ${points}`)
        alert(`Parabens sua tentativa foi ${tentativas}`)
        pontuaçãoFinal = points - tentativas
        alert(`Sua pontuação final foi: ${pontuaçãoFinal}`)

        lastScore = pontuaçãoFinal

        pontosUser=JSON.parse(localStorage.getItem('pUser'))

        if(pontosUser==null){

            pontosUser =0

            if(lastScore>pontosUser){

                pontosUser = lastScore

                localStorage.setItem('pUser',JSON.stringify(pontosUser))
            }


        }else if(lastScore>pontosUser){

            pontosUser = lastScore

            localStorage.setItem('pUser',JSON.stringify(pontosUser))

        }
    }
}


const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter == secondCharacter) {


        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';
        points += 10

        checkEndGame();

    } else {

        setTimeout(() => {
            tentativas++
            console.log("tentativas" + tentativas)

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);

    }

}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard == '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard == '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }

}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('Imagens/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character)

    return card;
}

const loadGame = () => {

    const duplicateCharacteres = [...characters, ...characters]

    const shuffledArray = duplicateCharacteres.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

const startTimer = () => {

    this.loop = setInterval(() => {
        const currentTime = Number(timer.innerHTML);
        timer.innerHTML = currentTime + 1;
    }, 1000);

    let audio = new Audio('cartaPar.mp3');
    audio.play();

}

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}
