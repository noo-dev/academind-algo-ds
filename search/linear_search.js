function findElement(arr, element, cmpFn) {
    let index = 0
    outerLoop: for (const item of arr) {
        if (
            typeof element === 'object' && 
            element !== null &&
            cmpFn(element, item)
            ) {
            return index
        } else {
            if (item === element) {
                return index
            }
        }
        index++
    }

    return -1
}

const arr = [5, -1, 10, -10, 55]
const objects = [{name: "Max", age: 22}, {name: "Boris", age: 50}]

console.log(findElement(objects, {name: "Max", age: 22}, function(el, it) {
    return (
        el.name === it.name &&
        el.age === it.age
    )
}))