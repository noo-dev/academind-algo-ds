const {isPowerOfTwo, isPowerOfTwoBit} = require('./isPowerOfTwo')


test('Returns true if number is power of two', () => {
    expect(isPowerOfTwo(512)).toBeTruthy()
    expect(isPowerOfTwo(4)).toBeTruthy()

})

test('Bitwise - Returns true if number is power of two', () => {
    expect(isPowerOfTwoBit(512)).toBeTruthy()
    expect(isPowerOfTwoBit(4)).toBeTruthy()
})

test('Returns false if input is not power of two', () => {
    expect(isPowerOfTwo(20)).toBeFalsy()
})

test('Bitwise - Returns false if input is not power of two', () => {
    expect(isPowerOfTwoBit(20)).toBeFalsy()
    expect(isPowerOfTwoBit(13)).toBeFalsy()

})