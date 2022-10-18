let calculaDesconto = (valor,desconto) =>
    valor*(1-desconto/100);
   
const valorComDesconto = calculaDesconto(1000,20);
console.log(valorComDesconto);