let usuario
let flag = 0


let velocidade = 120

function facil() {
    velocidade = 120
    start()

}

function medio() {
    velocidade = 80
    start()
}

function dificil() {
    velocidade = 50
    start()
}


function start() {


    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);


    setInterval(game, velocidade);


    const vel = 1

    var score = 0
    var vx = vy = 0 // velocidade x e y
    var px = 10 //ponto de inicio
    var py = 15 //ponto de inicio
    var tp = 40 // tamanho peça
    var qp = 20
    var ax = ay = 15 //ponto inicial da maçã

    var trail = []
    var tail = 5 //tamanho da cauda

    function game() {

        flag = 0

        px += vx
        py += vy
        if (px < 0) {
            px = qp - 1
        }
        if (px > qp) {
            px = 0
        }
        if (py < 0) {
            py = qp - 1
        }
        if (py > qp - 1) {
            py = 0
        }


        ctx.fillStyle = "#3CA4FF";
        ctx.fillRect(0, 0, stage.width, stage.height);
        ctx.fillStyle = "#4EFF22"
        ctx.fillRect(ax * tp, ay * tp, tp, tp)

        ctx.fillStyle = "#262626"


        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1) //pintar o vetor

            //AQUI REINICIA
            if (trail[i].x == px && trail[i].y == py) {

                vx = vy = 0;
                tail = 5;
                score = 0
                flag = 1


                recorde.innerHTML = JSON.parse(localStorage.getItem('recorde'))

            }
        }


        trail.push({x: px, y: py})
        while (trail.length > tail) {
            trail.shift();
        }

        //JOGO ACONTECE
        if (ax == px && ay == py) {

            tail++
            ax = Math.floor(Math.random() * qp)
            ay = Math.floor(Math.random() * qp)

            score++

            pontuacao.innerHTML = score

            lastScore = score


            if (usuario == null) {

                usuario = 0

                if (lastScore > usuario && flag == 0) {

                    usuario = lastScore


                    localStorage.setItem('recorde', JSON.stringify(usuario))
                }
            }

            if (lastScore > usuario && flag == 0) {

                usuario = lastScore


                localStorage.setItem('recorde', JSON.stringify(usuario))
            }
        }
    }

    let lastpush = ''

    function keyPush(event) {
        switch (event.keyCode) {

            case 37: //left
                if (lastpush != 'right') {
                    vx = -vel;
                    vy = 0;
                    lastpush = 'left'
                }
                break;


            case 38: //up
                if (lastpush != 'down') {
                    vx = 0;
                    vy = -vel;
                    lastpush = 'up'

                }
                break;

            case 39: //right
                if (lastpush != 'left') {
                    vx = vel;
                    vy = 0;
                    lastpush = 'right'

                }
                break;

            case 40: //down
                if (lastpush != 'up') {
                    vx = 0;
                    vy = vel;
                    lastpush = 'down'

                }
                break;
            default:
                break;


        }
    }
}
