const {factorial, factorialRec} = require('./factorial')

test('calculates factorial accurately', () => {
    expect(factorial(1)).toBe(1)
    expect(factorial(2)).toBe(2)
    expect(factorial(3)).toBe(6)
    expect(factorial(4)).toBe(24)
})


test('recursive factorial works as expected', () => {
    expect(factorialRec(4)).toBe(24)
})