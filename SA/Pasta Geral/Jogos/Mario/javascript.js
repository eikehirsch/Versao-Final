const mario = document.querySelector('.mario'); //coloca o mario dentro de uma cont
const pipe = document.querySelector('.pipe');//coloca o pipe dentro de uma const
const bird = document.querySelector('.bird');//coloca o bird dentro de uma const

const jump = () => {//adiciona à imagem do mario a classe que contem a animação do pulo
    mario.classList.add('jump');

    setTimeout(() => {//remove a animação para que possa ser reincerida
        mario.classList.remove('jump');
    }, 500);
}

let morto = 0;
let points = 0;
let highScoreStored


const pointCount = setInterval(() => {
    if(morto == 0){
        points++
        console.log(points)
        document.getElementById('points').innerHTML = points
    }

}, 500)


const loop = setInterval(() => {// o que acontece quando enconsta no cano (perde)

    const pipePosition = pipe.offsetLeft; //pega o deslocamento esquerdo do pipe e joga em pipeposition
    const birdPosition = bird.offsetLeft; //pega o deslocamento esquerdo do bird e joga em pipeposition

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');//pega o valor do botton que o mário está ao pular, usando o '+' para converter o valor recebido em string para number//O getcomputedStyle pega os valores computados quando o mario pula (rastreia o que está acontecendo com um elemento no CSS)//O .replace substitui o 'px' por um valor vazio, fazendo ser recebido somento o número em relação à posição do dado obtido

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 || birdPosition <= 120 && birdPosition > 0 && marioPosition < 80){//verifica a posição de pipe e altura de mario ao passar pelo cano

        pipe.style.animation = 'none'; //retira a animação do pipe andando
        pipe.style.left = `${pipePosition}px`;//faz o cano parar exatamente quando encosta no mario

        pipe.style.animation = 'none';
        pipe.style.bottom = `${marioPosition}px`;

        mario.src = 'Imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '30px';

        pipe.style.bottom = "-6px"
        bird.style.bottom = "-6px"

        bird.style.animation = 'none';
        bird.style.left = `${birdPosition}px`;

        bird.style.animation = 'none';
        bird.style.bottom = `${birdPosition}px`;

        pipe.style.animation = 'none';

        mario.src = 'Imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '30px';

        morto = 1;

        highScoreStored = localStorage.getItem('highScoreStored')

        if(highScoreStored == null) {
            highScoreStored = 0
        }else{
            document.getElementById('highScoreShow').innerHTML = highScoreStored
        }

        if(points > highScoreStored) {
            localStorage.setItem('highScoreStored', points)
        }

        clearInterval(loop);
    }


}, 10)


highScoreStored = localStorage.getItem('highScoreStored')

if(highScoreStored == null) {
    highScoreStored = 0
}else{
    document.getElementById('highScoreShow').innerHTML = highScoreStored
}

if(points > highScoreStored) {
    localStorage.setItem('highScoreStored', points)
}

document.addEventListener('keydown', jump);