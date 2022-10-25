function exibeNImpAres(n) {
    let i = 1;
    let numeroImpar = 1;

    if (n < 0) {
        console.log('Valor inválido')
        return undefined; 
    }
    while(i <= n/2+1) {
       
        console.log(numeroImpar); 
        numeroImpar += 2;
        i++;   
    }
}

exibeNImpAres(45);