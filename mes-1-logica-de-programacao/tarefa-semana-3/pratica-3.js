let i = 1
let divisores = 0
function ehPrimo(n) {
while (i <= n) {
    if(n % i === 0) {
        divisores++;
    } 
i++; 
}
if (divisores === 2) {
    console.log('true')
} else {
    console.log('false')
}
}

ehPrimo(5);
