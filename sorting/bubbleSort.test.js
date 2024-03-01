const bubbleSort = require('./bubbleSort')

test("bubblesort works as expected", () => {
    const unsortedArr = [10, -1, 5, 6, 99, 4, 0, -5]
    const sortedArr = [-5, -1, 0, 4, 5, 6, 10, 99]
    expect(bubbleSort(unsortedArr)).toEqual(sortedArr)
})

