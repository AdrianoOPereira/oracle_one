let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function verificarAprovacao(media) {
    return media >= 5 ? "aprovado" : "reprovado"
}

function calcularMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4; 
    return media;
}


console.log(calcularMedia(nota1, nota2, nota3, nota4));
console.log(verificarAprovacao(calcularMedia(nota1, nota2, nota3, nota4)));