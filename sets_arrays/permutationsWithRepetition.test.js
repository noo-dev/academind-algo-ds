const getPermutations = require('./permutationsWithRepetition')

test("calculates correctly permutations with repetition", () => {
    const expectedPermutations = [
        [ 1, 1, 1 ], [ 1, 1, 2 ], [ 1, 1, 3 ],
        [ 1, 2, 1 ], [ 1, 2, 2 ], [ 1, 2, 3 ],
        [ 1, 3, 1 ], [ 1, 3, 2 ], [ 1, 3, 3 ],
        [ 2, 1, 1 ], [ 2, 1, 2 ], [ 2, 1, 3 ],
        [ 2, 2, 1 ], [ 2, 2, 2 ], [ 2, 2, 3 ],
        [ 2, 3, 1 ], [ 2, 3, 2 ], [ 2, 3, 3 ],
        [ 3, 1, 1 ], [ 3, 1, 2 ], [ 3, 1, 3 ],
        [ 3, 2, 1 ], [ 3, 2, 2 ], [ 3, 2, 3 ],
        [ 3, 3, 1 ], [ 3, 3, 2 ], [ 3, 3, 3 ]
      ]


    const digits = [1, 2, 3];
    const permutationLength = 3;
    expect(getPermutations(digits, permutationLength)).toEqual(expectedPermutations);
})