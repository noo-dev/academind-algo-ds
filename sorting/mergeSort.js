function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    if (arr.length === 2) {
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr
    }
    const midIdx = Math.floor(arr.length / 2)
    const rightArr = arr.slice(0, midIdx)
    const leftArr = arr.slice(midIdx)

    const leftSortedArr = mergeSort(leftArr)
    const rightSortedArr = mergeSort(rightArr)

    return mergeArrays(leftSortedArr, rightSortedArr)
}

function mergeArrays(leftArr, rightArr) {
    let leftIdx = 0
    let rightIdx = 0

    const mergedArr = []
    while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
        if (leftArr[leftIdx] < rightArr[rightIdx]) {
            mergedArr.push(leftArr[leftIdx])
            leftIdx++
        } else {
            mergedArr.push(rightArr[rightIdx])
            rightIdx++
        }
    }

    while (leftIdx < leftArr.length) {
        mergedArr.push(leftArr[leftIdx])
        leftIdx++
    }

    while (rightIdx < rightArr.length) {
        mergedArr.push(rightArr[rightIdx])
        rightIdx++
    }

    return mergedArr
}

// const sortedArray = mergeSort([-10, 33, 5, 10, 3, -99, 100])
// const sortedArray = mergeSort([-10, 100, 33, 5])

// console.log("result", sortedArray)

module.exports = mergeSort