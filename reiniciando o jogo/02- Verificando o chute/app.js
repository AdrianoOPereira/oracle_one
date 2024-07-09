let numeroSecreto = gerarNumeroAleatorio();

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log("O botão foi clicado");
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirNumeroNaTela ("h1", "Acertou!")
        exibirNumeroNaTela ("p", "Você descobriu o número!")
    } else {
        if (chute > numeroSecreto) {
            exibirNumeroNaTela ("p", "O número secreto é menor")
        } else {
            exibirNumeroNaTela ("p", "O número secreto é maior")
        }
    }
    
}

function exibirNumeroNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirNumeroNaTela ("h1", " Jogo do número secreto ");
exibirNumeroNaTela ("p", "Esconha o número entre 1 e 10");

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
