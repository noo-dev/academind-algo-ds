const knapsack = require('./knapsack.js')

test("knapsack - gets most valuable items under max capacity", () => {
    let items = [
        { name: 'a', value: 3, weight: 3 },
        { name: 'b', value: 6, weight: 8 },
        { name: 'c', value: 10, weight: 3 }
    ];
    let maxCap = 8
    

    expect(knapsack(items, maxCap)).toEqual({
        items: [{ name: 'a', value: 3, weight: 3},{ name: 'c', value: 10, weight: 3 }],
        value: 13,
        weight: 6
      })

    items = [
        { name: 'a', value: 3, weight: 3 },
        { name: 'b', value: 7, weight: 8 },
        { name: 'c', value: 16, weight: 13 },
        { name: 'd', value: 5, weight: 3 }
    ]

    maxCap = 15

    expect(knapsack(items, maxCap)).toEqual({
        items: [{ name: 'c', value: 16, weight: 13}],
        value: 16,
        weight: 13
      })
})