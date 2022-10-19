function calculoImc(x,y) {
    imc = x/(y*y)
    return imc
}

function resultadoImc(x,y) {
    if (calculoImc(x,y)<18.5){
        console.log('"Abaixo do Peso" -> IMC abaixo de 18.5')
    } else if (calculoImc(x,y)>=18.5 && imc <25){
        console.log('"Peso Normal" -> IMC entre 18.5 e 25')
    } else if (calculoImc(x,y)>=25 && imc <30) {
        console.log('"Sobrepeso" -> IMC entre 25 e 30')
    } else if (calculoImc(x,y) > 30){
        console.log('"Obesidade" -> IMC maior que 30')
    } 
}

resultadoImc(80,1.80)