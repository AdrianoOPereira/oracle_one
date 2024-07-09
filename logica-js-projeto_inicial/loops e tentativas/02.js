alert ("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 2;
console.log(numeroSecreto)

let chute = prompt("Escolhe um número entre 1 a 10")

if(chute == numeroSecreto) {
    alert('Isso aí! Você descobriu o número secreto ${numeroSecreto}');
} else {
    alert("Você errou")
}