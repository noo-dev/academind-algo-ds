 function getMin(numbers) {
    let min = numbers[0]    // 1
    for (const num of numbers) { // 1
        if (num < min) { // n
            min = num // n - 1 
        }
    }
    return min  //1 
 }