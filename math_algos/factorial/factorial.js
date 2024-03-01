function factorial(n) {
    let result = 1 ;
    for (i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


function factorialRec(n) {
    if (n === 1) {
        return 1
    }
    return n * factorialRec(n-1)
}

console.log(factorialRec(3))
console.log(factorialRec(4))
console.log(factorialRec(5))

// module.exports = {factorial, factorialRec}