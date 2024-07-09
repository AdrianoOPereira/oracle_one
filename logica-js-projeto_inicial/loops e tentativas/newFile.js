//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt("Escolhe um número entre 1 a 10");
    if (chute == numeroSecreto) {
        alert('Isso aí! Você descobriu o número secreto ${numeroSecreto}');
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ${chute}');
        } else {
            alert('O número secreto é manior que ${chute}');
        }
    }

}
