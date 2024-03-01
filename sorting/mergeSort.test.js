const mergeSort = require('./mergeSort')

test("merge sort works as expected", () => {
    const unsortedArr = [-10, 33, 5, 10, 3, -19, -99, 100]
    const sortedArr = [-99, -19, -10, 3, 5, 10, 33, 100]
    expect(mergeSort(unsortedArr)).toEqual(sortedArr)
})