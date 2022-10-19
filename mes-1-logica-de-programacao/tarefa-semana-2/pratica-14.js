function calculoImc(x,y) {
    imc = x/(y*y)
    if (imc < 10.8){
        console.log('Abaixo do Peso')
    } else if (imc>=18.5 && imc <25){
        console.log('Peso Normal')
    } else if (imc>=25 && imc <30) {
        console.log('Sobrepeso')
    } else if (imc > 30){
        console.log("Obesidade")
    }
}
       

calculoImc(95,1.80)