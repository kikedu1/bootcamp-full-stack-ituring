function maiorMenor (x,y) {
    if (x>y) {
        console.log(x)
    } else if (y>x) {
        console.log(y)
    } else {
        console.log(x || y)
    }
}

maiorMenor(30,60)