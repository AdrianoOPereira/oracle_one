
let porcentagemDesconto = 0;


if (quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
    console.log("desconto de 20%")
} else {
    if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
    console.log("desconto de 10%")
}

}
console.log("porcentagem desconto:", porcentagemDesconto, "%")