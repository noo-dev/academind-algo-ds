const cartesian = require('./cartesianProduct')

test("calculates cartesian product for two sets", () => {
    const colors = ['blue', 'red']
    const sizes = ['M', 'L']

    const expectedArr = [
        ['blue', 'M'],
        ['blue', 'L'],
        ['red', 'M'],
        ['red', 'L']
    ]

    expect(cartesian(colors, sizes)).toEqual(expectedArr);
})

test("calculates cartesian product for multiple sets", () => {
    const expectedArr = [
        [ 'blue', 'L', 'round', 'cotton' ],
        [ 'blue', 'L', 'round', 'silk' ],
        [ 'blue', 'L', 'v-shape', 'cotton' ],
        [ 'blue', 'L', 'v-shape', 'silk' ],
        [ 'blue', 'M', 'round', 'cotton' ],
        [ 'blue', 'M', 'round', 'silk' ],
        [ 'blue', 'M', 'v-shape', 'cotton' ],
        [ 'blue', 'M', 'v-shape', 'silk' ],
        [ 'red', 'L', 'round', 'cotton' ],
        [ 'red', 'L', 'round', 'silk' ],
        [ 'red', 'L', 'v-shape', 'cotton' ],
        [ 'red', 'L', 'v-shape', 'silk' ],
        [ 'red', 'M', 'round', 'cotton' ],
        [ 'red', 'M', 'round', 'silk' ],
        [ 'red', 'M', 'v-shape', 'cotton' ],
        [ 'red', 'M', 'v-shape', 'silk' ]
    ]

    const sizes = ['L', 'M']
    const colors = ['blue', 'red']
    const styles = ['round', 'v-shape']  
    const materials = ['cotton', 'silk']

    expect(cartesian(colors, sizes, styles, materials)).toEqual(expectedArr)
})