const LinkedList = require('../linkedList/LinkedList')

class Stack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
        const popped = this.list.deleteHead()
        return popped ? popped.value : null
    }

    peek() {
        const peeked = this.list.head
        return peeked ? peeked.value : null
    }

    isEmpty() {
       return this.list.head === null
    }

    toArray() { 
        return this.list.toArray().reverse()
    }
}

/* const stack = new Stack()
console.log(stack.pop())
console.log(stack.isEmpty())

stack.push(1)
stack.push(2)
console.log(stack.isEmpty())
stack.push(3)
console.log(stack.pop())
console.log(stack.toArray()) */

module.exports = Stack