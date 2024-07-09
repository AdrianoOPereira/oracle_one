alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() *100 + 1);
console.log(numeroSecreto);
let chute; // Inicialize a variável chute com um valor vazio
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 a 100");
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        //A ideia é pensar em quantas tentativas foram necessárias para descobrir o número secreto. Como fazemos isso?
            tentativas++;
    }
}


//Isso que fizemos se chama de operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Vc descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);