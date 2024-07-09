function verificarChute() {
    console.log("O botão foi clicado");
}

function exibirNumeroNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirNumeroNaTela ("h1", " Jogo do número secreto ");
exibirNumeroNaTela ("p", "Esconha o número entre 1 e 100");

