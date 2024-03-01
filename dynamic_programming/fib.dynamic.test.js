const fib = require('./fib.dynamic')

test("Find the nth element of fibonacci sequence", () => {
    expect(fib(1)).toBe(1)
    expect(fib(2)).toBe(2)
    expect(fib(3)).toBe(3)
    expect(fib(4)).toBe(5)
    expect(fib(5)).toBe(8)
})