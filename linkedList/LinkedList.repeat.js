const Node = require('./LinkedListNode')

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    toArray() {
        const resultArr = []

        let curNode = this.head

        while (curNode) {
            resultArr.push(curNode.value)
            curNode = curNode.next
        }

        return resultArr
    }

    prepend(value) {  
        const newNode = new Node(value, this.head)
        if (this.head === null) {
            this.tail = newNode
        }
        this.head = newNode
        
    }

    append(value) {
        const newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    find(value) {
        let curNode = this.head
        while (curNode) {
            if (curNode.value === value) {
                return curNode
            }
            curNode = curNode.next
        }

        return null
    }

    delete(value) {
        if (!this.head) {
            return 
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next
        }

        if (!this.head) {
            return
        }

        let curNode = this.head

        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next
            } else {
                curNode = curNode.next
            }
        }

        this.tail = curNode

    }

    insertAfter(value, afterValue) {
        const newNode = new Node(value)
        const existingNode = this.find(afterValue)

        if (existingNode) {
            newNode.next = existingNode.next
            existingNode.next = newNode
            
            if (existingNode === this.tail) {
                this.tail = newNode
            }
        }
    }

    deleteTail() {
        const deletedTail = this.tail

        if (!this.head) {
            return null
        }

        if (this.head === this.tail) {
            this.tail = null
            this.head = null
        }

        let curNode = this.head 
        while (curNode) {
            if (curNode.next === this.tail) {
                this.tail = curNode
                curNode.next = null
            }

            curNode = curNode.next
        }

        return deletedTail
    }

    deleteHead() {
        const deletedHead = this.head

        if (this.head) {
            this.head = this.head.next
        }

        return deletedHead
    }

    fromArray(arr) {
        this.head = null
        this.tail = null


        arr.forEach(item => {
            
            this.append(item)
        })
    }

    reverse() {
        let curNode = this.head
        let prevNode = null
        while (curNode) {
            const nextNode = curNode.next
            curNode.next = prevNode

            prevNode = curNode

            curNode = nextNode
        }

        this.tail = this.head
        this.head = prevNode
    }

}


const linkedList1 = new LinkedList();
linkedList1.append('Max')
linkedList1.append(12)
linkedList1.append(true)
// linkedList1.prepend('begin')
// linkedList1.prepend('begin')
linkedList1.insertAfter(13, 12)
// linkedList1.delete(true)
//console.log(linkedList1.deleteTail())
// console.log(linkedList1.reverse()) 
console.log(linkedList1.toArray()) 
// console.log(linkedList1.tail) 
// console.log(linkedList1)


module.exports = LinkedList
 