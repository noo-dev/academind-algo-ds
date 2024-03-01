const binary_search = require("./binary_search")

test("binary search function return correct index of item", () => {
    const arr = [2, 4, 6, 7, 8, 11, 12, 14]
    expect(binary_search(arr, 11)).toBe(5)
    expect(binary_search(arr, 2)).toBe(0)
    expect(binary_search(arr, 14)).toBe(7)
    expect(binary_search(arr, 5)).toBe(-1)
    expect(binary_search(arr, 1)).toBe(-1)
    expect(binary_search(arr, 17)).toBe(-1)
})