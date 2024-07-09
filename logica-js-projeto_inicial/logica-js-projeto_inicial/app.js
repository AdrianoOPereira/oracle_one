alert("Boas vindas ao jogo do número secreto!");

let numeroSecreto = 8;
let chute = prompt("Escolha um número entre 1 a 10");

// se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    console.log('Isso aí! Vc descobriu o número secreto ${numeroSecreto');
} else {
    alert("Você errou tente novamente!");
}