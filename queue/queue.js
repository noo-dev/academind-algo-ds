const LinkedList = require('../linkedList/LinkedList.js')

class Queue {
  constructor() {
    this.items = new LinkedList()
  }

  enqueue(value) {
    this.items.append(value)
  }

  dequeue() {
    return this.items.deleteHead().value
  }

  toArray() {
    return this.items.toArray()
  }
}

module.exports = Queue
