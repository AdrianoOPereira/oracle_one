let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector("input").value;
    //console.log("O botão foi clicado");
    //console.log(chute == numeroSecreto);
    
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Voce acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirNumeroNaTela ("h1", "Acertou!");
        exibirNumeroNaTela ("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirNumeroNaTela ("p", "O número secreto é menor");
        } else {
            exibirNumeroNaTela ("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
    
}

function exibirNumeroNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirNumeroNaTela ("h1", " Jogo do número secreto ");
    exibirNumeroNaTela ("p", "Esconha o número entre 1 e 10");
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled, true");
}