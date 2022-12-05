// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

function mostrarPodium() {
    podium = document.getElementById("score-podium")
    podium.style.opacity='1';

    document.getElementById("teste").style.boxShadow="4px 4px 4px black"
    document.getElementById("teste").style.backgroundColor='#F9EED6'
    document.getElementById("teste2").style.boxShadow="4px 4px 4px black"
    document.getElementById("teste2").style.backgroundColor='#F9EED6'
    document.getElementById("teste3").style.boxShadow="4px 4px 4px black"
    document.getElementById("teste3").style.backgroundColor='#F9EED6'
    document.getElementById("teste4").style.boxShadow="4px 4px 4px black"
    document.getElementById("teste4").style.backgroundColor='#F9EED6'
    document.getElementById("teste5").style.boxShadow="4px 4px 4px black"
    document.getElementById("teste5").style.backgroundColor='#F9EED6'

    let marioResultado = localStorage.getItem('highScoreStored')
    document.getElementById('primeiroMario').value = marioResultado

    let snakeResultado = localStorage.getItem('recorde')
    document.getElementById('primeiroSnake').value = snakeResultado

    let memoriaResultado = localStorage.getItem('pUser')
    document.getElementById('primeiroMemoria').value = memoriaResultado
}
