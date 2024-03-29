const fib = require('./fib')

test("get nth element of fibonacci sequence", () => {
    expect(fib(0)).toBe(1)
    expect(fib(1)).toBe(1)
    expect(fib(2)).toBe(2)
    expect(fib(3)).toBe(3)
    expect(fib(4)).toBe(5)
    expect(fib(5)).toBe(8)
    expect(fib(6)).toBe(13)
})