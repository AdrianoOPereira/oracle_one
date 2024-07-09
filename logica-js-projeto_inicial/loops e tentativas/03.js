alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 2;
console.log(numeroSecreto)
let chute; // Inicialize a variável chute com um valor vazio

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 a 10");
    if (chute == numeroSecreto) {
        alert(`Isso aí! Vc descobriu o número secreto ${chute}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}



