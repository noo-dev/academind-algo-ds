function knapsack(items, cap, itemIndex, memo) {
    if (memo[cap][itemIndex]) {
        return memo[cap][itemIndex]
    }

    if (itemIndex < 0 || cap == 0) {
        return {items: [], weight: 0, value: 0}    
    }

    const currentItem = items[itemIndex]
    if (currentItem.weight > cap) {
        return knapsack(items, cap, itemIndex-1, memo)
    }

    
    const sackWithCapForItem = knapsack(items, cap - currentItem.weight, itemIndex-1, memo)

    const sackWithoutItem = knapsack(items, cap, itemIndex-1, memo)

    let result
    const valueOfSachWithItem = sackWithCapForItem.value + currentItem.value
    if ( valueOfSachWithItem > sackWithoutItem.value) {
        result = {
            items: sackWithCapForItem.items.concat([currentItem]),
            weight: sackWithCapForItem.weight + currentItem.weight,
            value: sackWithCapForItem.value + currentItem.value
        }
    } else {
        result = sackWithoutItem
    }

    memo[cap][itemIndex] = result
    return result
}

function knapsackDecorator(items, cap) {
    const memo = Array.from({length: cap + 1}, () => {
        return Array(items.length).fill(undefined)
    })
    return knapsack(items, cap, items.length - 1, memo)
}


/////////////////////////////////////////////////////////////////

/* let items = [
    { name: 'a', value: 3, weight: 3 },
    { name: 'b', value: 6, weight: 8 },
    { name: 'c', value: 10, weight: 3 }
];
let maxCap = 8

console.log(knapsackDecorator(items, maxCap)) */

module.exports = knapsackDecorator