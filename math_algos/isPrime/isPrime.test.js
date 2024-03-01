const isPrime = require('./isPrime')

test('if given prime number, returns true', () => {
    expect(isPrime(5)).toBeTruthy
    expect(isPrime(3)).toBeTruthy
    expect(isPrime(13)).toBeTruthy
    expect(isPrime(7)).toBeTruthy
    expect(isPrime(23)).toBeTruthy
})

test('if given non-prime number, returns false', () => {
    expect(isPrime(9)).toBeFalsy()
    expect(isPrime(25)).toBeFalsy()
    expect(isPrime(48)).toBeFalsy()
    expect(isPrime(6)).toBeFalsy()
})

