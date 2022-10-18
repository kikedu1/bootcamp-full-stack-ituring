const exp = function calculaDesconto(valor,desconto){
    const valorFinal = valor*(1-desconto/100);
    return valorFinal.toFixed(2);
}

const valorComDesconto = exp(1000,20);
console.log(valorComDesconto);