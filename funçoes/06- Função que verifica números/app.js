let numeroSecreto = gerarNumeroAleatorio();


function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log("O botão foi clicado");
    console.log(chute == numeroSecreto);
    
}

function exibirNumeroNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirNumeroNaTela ("h1", " Jogo do número secreto ");
exibirNumeroNaTela ("p", "Esconha o número entre 1 e 100");

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function verificarNumero(numero) {
    if (numero > 0) {
        console.log("O número é positivo");
    } else if (numero < 0) {
        console.log("O número é negativo");
    } else {
        console.log("O número é zero");
    }
    console.log("O número verdadeiro é:", numero);
}