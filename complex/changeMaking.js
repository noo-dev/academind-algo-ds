function changeMaking(value, coins) {
    let numberOfCoins = 0
    const selectedCoins = {}
    let remainingValue = value

    for (const coin of coins) {
        const currentCointNumber = Math.floor(remainingValue / coin)
        if (currentCointNumber > 0) {
            selectedCoins[coin] = currentCointNumber
            remainingValue -= currentCointNumber * coin
            numberOfCoins += currentCointNumber
            if (remainingValue === 0) {
                break
            }
        }
    }

    
    return {selectedCoins, numberOfCoins}
}

function changeMakingBruteForce(value, coins) {
    const results = []
    for (let i = 0; i < coins.length; i++) {
        results.push(changeMaking(value, coins.slice(i)))
    }

    let smallestElement
    let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER
    for (const result of results) {
        if (result.numberOfCoins < smallestAmountOfCoins) {
            smallestElement = result
            smallestAmountOfCoins = result.numberOfCoins
        }
    }

    return smallestElement
}

const coins = [8, 6, 5, 1]
const selectedCoins = changeMakingBruteForce(11, coins)
console.log(selectedCoins)