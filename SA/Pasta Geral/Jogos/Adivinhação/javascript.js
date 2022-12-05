// vai precisar que o usuário digite um número e este número será a palavra

// escurecer os forms que não forem usados devido a quantidade de letras

// Altere a propriedade CSS com getElementById em JavaScript
// Se tivermos um id único atribuído a um elemento HTML, podemos consultá-lo e alterar seu estilo com a função getElementById() da interface Document. É o método mais usado por desenvolvedores da web. Na maioria das vezes, os ids atribuídos a um div serão mantidos exclusivos para que, durante a execução da função getElementById(), outros elementos HTML não sejam selecionados. A sintaxe para getElementById() é conforme ilustrado abaixo.

// document.getElementById("parent-1"));
// Como selecionamos um elemento único, neste caso, as mudanças de estilo são fáceis de fazer. Os códigos a seguir descrevem os caminhos. É semelhante aos mencionados anteriormente, com a diferença de como consultamos um elemento. Aqui, identificamos exclusivamente os nós HTML com o ID do elemento.
//   como mudar um elemento css pelo css  document.getElementById("letra1").style.backgroundColor = "red";

//Adicionar pistas das palavras

let palavra = ``
let acertos = 0



function startButton() {// essa fuction vai inserir as letras dentro dos inputs e deixálas com a mesma cor do fundo
    document.getElementById("letra1").style.color = "rgb(0, 134, 235)";
    document.getElementById("letra1").style.webkitTextStroke = "rgb(0, 134, 235)";

    document.getElementById("letra2").style.color = "rgb(0, 134, 235)";
    document.getElementById("letra2").style.webkitTextStroke = "rgb(0, 134, 235)";

    document.getElementById("letra3").style.color = "rgb(0, 134, 235)";
    document.getElementById("letra3").style.webkitTextStroke = "rgb(0, 134, 235)";

    document.getElementById("letra4").style.color = "rgb(0, 134, 235)";
    document.getElementById("letra4").style.webkitTextStroke = "rgb(0, 134, 235)";

    document.getElementById("letra5").style.color = "rgb(0, 134, 235)";
    document.getElementById("letra5").style.webkitTextStroke = "rgb(0, 134, 235)";

    let raffleNumber

    let numeroInicial = document.getElementById("raffleNumber")

    raffleNumber = Number(numeroInicial.value)

    if (raffleNumber == 1) {//codar
        document.getElementById("letra1").value = `c`;
        document.getElementById("letra2").value = `o`;
        document.getElementById("letra3").value = `d`;
        document.getElementById("letra4").value = `a`;
        document.getElementById("letra5").value = `r`;
    }
    if (raffleNumber == 2) {//caixa
        document.getElementById("letra1").value = `c`;
        document.getElementById("letra2").value = `a`;
        document.getElementById("letra3").value = `i`;
        document.getElementById("letra4").value = `x`;
        document.getElementById("letra5").value = `a`;
    }
    if (raffleNumber == 3) {//foice
        document.getElementById("letra1").value = `f`;
        document.getElementById("letra2").value = `o`;
        document.getElementById("letra3").value = `i`;
        document.getElementById("letra4").value = `c`;
        document.getElementById("letra5").value = `e`;
    }
    if (raffleNumber == 4) {//jonas
        document.getElementById("letra1").value = `j`;
        document.getElementById("letra2").value = `o`;
        document.getElementById("letra3").value = `n`;
        document.getElementById("letra4").value = `a`;
        document.getElementById("letra5").value = `s`;
    }
    if (raffleNumber == 5) {//perna
        document.getElementById("letra1").value = `p`;
        document.getElementById("letra2").value = `e`;
        document.getElementById("letra3").value = `r`;
        document.getElementById("letra4").value = `n`;
        document.getElementById("letra5").value = `a`;
    }
}


function tentar() {
    l1 = document.getElementById("letra1").value
    l2 = document.getElementById("letra2").value
    l3 = document.getElementById("letra3").value
    l4 = document.getElementById("letra4").value
    l5 = document.getElementById("letra5").value

    let tentativa = document.getElementById("inputTry").value

    if (tentativa == l1) {
        document.getElementById("letra1").style.color = "rgb(255, 255, 255)";
        document.getElementById("letra1").style.webkitTextStroke = "1px rgb(0, 0, 0)";
        acertos++
    }

    if (tentativa == l2) {
        document.getElementById("letra2").style.color = "rgb(255, 255, 255)";
        document.getElementById("letra2").style.webkitTextStroke = "1px rgb(0, 0, 0)";
        acertos++
    }

    if (tentativa == l3) {
        document.getElementById("letra3").style.color = "rgb(255, 255, 255)";
        document.getElementById("letra3").style.webkitTextStroke = "1px rgb(0, 0, 0)";
        acertos++
    }

    if (tentativa == l4) {
        document.getElementById("letra4").style.color = "rgb(255, 255, 255)";
        document.getElementById("letra4").style.webkitTextStroke = "1px rgb(0, 0, 0)";
        acertos++
    }

    if (tentativa == l5) {
        document.getElementById("letra5").style.color = "rgb(255, 255, 255)";
        document.getElementById("letra5").style.webkitTextStroke = "1px rgb(0, 0, 0)";
        acertos++
    }

    console.log(acertos)

    if (acertos == 5 ||acertos == 10 ||acertos == 15 ||acertos == 20 || acertos == 25) {
        document.getElementById("letra1").style.color = "rgb(0, 255, 80)";
        document.getElementById("letra2").style.color = "rgb(0, 255, 80)";
        document.getElementById("letra3").style.color = "rgb(0, 255, 80)";
        document.getElementById("letra4").style.color = "rgb(0, 255, 80)";
        document.getElementById("letra5").style.color = "rgb(0, 255, 80)";
    }

    if(acertos == 5){
        document.getElementById("points").innerHTML = "1"
    }
    if(acertos == 10){
        document.getElementById("points").innerHTML = "2"
    }
    if(acertos == 15){
        document.getElementById("points").innerHTML = "3"
    }
    if(acertos == 20){
        document.getElementById("points").innerHTML = "4"
    }
    if(acertos == 25){
        document.getElementById("points").innerHTML = "5"
    }

}