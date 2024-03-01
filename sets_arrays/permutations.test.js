const getPermutations = require('./permutations')

test("get permutations correctly", () => {
    const expectedPermutations = [
        [ 'A', 'B', 'C', 'D' ], [ 'B', 'A', 'C', 'D' ],
        [ 'B', 'C', 'A', 'D' ], [ 'B', 'C', 'D', 'A' ],
        [ 'A', 'C', 'B', 'D' ], [ 'C', 'A', 'B', 'D' ],
        [ 'C', 'B', 'A', 'D' ], [ 'C', 'B', 'D', 'A' ],
        [ 'A', 'C', 'D', 'B' ], [ 'C', 'A', 'D', 'B' ],
        [ 'C', 'D', 'A', 'B' ], [ 'C', 'D', 'B', 'A' ],
        [ 'A', 'B', 'D', 'C' ], [ 'B', 'A', 'D', 'C' ],
        [ 'B', 'D', 'A', 'C' ], [ 'B', 'D', 'C', 'A' ],
        [ 'A', 'D', 'B', 'C' ], [ 'D', 'A', 'B', 'C' ],
        [ 'D', 'B', 'A', 'C' ], [ 'D', 'B', 'C', 'A' ],
        [ 'A', 'D', 'C', 'B' ], [ 'D', 'A', 'C', 'B' ],
        [ 'D', 'C', 'A', 'B' ], [ 'D', 'C', 'B', 'A' ]
    ]

    const options = ['A', 'B', 'C', 'D']

    expect(getPermutations(options)).toEqual(expectedPermutations)
})