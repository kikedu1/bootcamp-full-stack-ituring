function compara3 (x,y,z) {
    if (x>y && x>z){
        console.log(x)
    } else if (y>x && y>z) {
        console.log(y)
    } else if (z>x && z>y) {
        console.log(z)
    } else {
        console.log(x || y || z)
    }
}

compara3(10,30,70)