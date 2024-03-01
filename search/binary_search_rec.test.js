const binary_search_rec = require('./binary_search_rec')

test("recursive binary search works as expected", () => {
    const arr = [2, 4, 6, 7, 8, 11, 12, 14]
    expect(binary_search_rec(arr, 11)).toBe(5)
    expect(binary_search_rec(arr, 2)).toBe(0)
    expect(binary_search_rec(arr, 14)).toBe(7)
    expect(binary_search_rec(arr, 5)).toBe(-1)
    expect(binary_search_rec(arr, 1)).toBe(-1)
    expect(binary_search_rec(arr, 17)).toBe(-1)
})