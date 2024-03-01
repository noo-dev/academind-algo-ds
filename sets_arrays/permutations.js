// Without repetitions 

function getPermutations(options) {

    if (options.length === 1) {
        return [[options[0]]]
    }

    const currentOption = options[0]
    const partialPermutations = getPermutations(options.slice(1))

    const permutations = []
    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermutation = partialPermutations[i]

        for (let j = 0; j <= partialPermutation.length; j++) {
            const permutationsInFront = partialPermutation.slice(0, j)
            const permutationsAfter = partialPermutation.slice(j)

            permutations.push(permutationsInFront.concat([currentOption], permutationsAfter))
        }
    }

    return permutations
}

/* const todoListItems = [
    'A',
    'B',
    'C',
    'D'
]

result = getPermutations(todoListItems)
console.log(result) */



module.exports = getPermutations
