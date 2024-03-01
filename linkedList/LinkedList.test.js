const LinkedList = require('./LinkedList.repeat.js')

describe("LinkedList", () => {

    it("should create empty linked list", () => {
        const linkedList = new LinkedList();
        expect(linkedList.toArray()).toEqual([]);
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull;
    })

    it("toArray method works correctly", () => {
        const linkedList = new LinkedList();
        expect(linkedList.toArray()).toEqual([])
        linkedList.head = {value: 1, next: null}
        linkedList.tail = linkedList.head
        expect(linkedList.toArray()).toEqual([1])
        
        const node2 = {value: 2, next: null}
        linkedList.head.next = node2
        linkedList.tail = node2
        expect(linkedList.toArray()).toEqual([1, 2])
    })

    
    it('should append node to linked list', () => {
        const linkedList = new LinkedList();

        linkedList.append(1);
        expect(linkedList.head).toEqual({value: 1, next: null});
        expect(linkedList.tail).toEqual({value: 1, next: null});
        
        linkedList.append(2);
        linkedList.append(10);

        expect(linkedList.toArray()).toEqual([1, 2, 10]);
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail).toEqual({value: 10, next: null});
    });

    it('should prepend node to linked list', () => {
        const linkedList = new LinkedList();

        linkedList.prepend(2);
        linkedList.append(1);
        linkedList.prepend(3);

        expect(linkedList.toArray()).toEqual([3, 2, 1]);
    });

    
    it('should find node by value', () => {
        const linkedList = new LinkedList();

        expect(linkedList.find(5)).toBeNull();

        linkedList.append(1);
        expect(linkedList.find(1)).toBeDefined();

        linkedList.append(2);
        linkedList.append(3);

        const node2 = linkedList.find(2)
        expect(node2.value).toBe(2)
        expect(node2.next.value).toBe(3);
    });

    
    
    it('should delete node by given value', () => {
        const linkedList = new LinkedList();

        linkedList.append(1);
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);
        linkedList.delete(1);
        expect(linkedList.toArray()).toEqual([2, 3, 3, 3, 4, 5]);

        linkedList.delete(3);
        linkedList.delete(5);
        expect(linkedList.toArray()).toEqual([2, 4]);
        expect(linkedList.head.value).toBe(2);
        expect(linkedList.tail.value).toBe(4);

        linkedList.delete(2);
        expect(linkedList.head.value).toBe(4);
        expect(linkedList.tail.value).toBe(4);
        linkedList.delete(4);
        expect(linkedList.toArray()).toEqual([]);
    });


    
    it('should insert after given value', () => {
        const linkedList = new LinkedList();
        linkedList.append(3)
        linkedList.insertAfter(4, 3)
        expect(linkedList.head.value).toBe(3);
        expect(linkedList.tail.value).toBe(4);

        linkedList.insertAfter(2, 3)
        linkedList.insertAfter(1, 2)
        linkedList.insertAfter(10, 1)
        expect(linkedList.toArray()).toEqual([3, 2, 1, 10, 4])
    });

        
    it('should delete linked list tail', () => {
        const linkedList = new LinkedList();

        expect(linkedList.deleteTail()).toBeNull();

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        const deletedNode1 = linkedList.deleteTail();
        expect(deletedNode1.value).toBe(3);
        expect(linkedList.toArray()).toEqual([1, 2])

        const deletedNode2 = linkedList.deleteTail();
        expect(deletedNode2.value).toBe(2)
        expect(linkedList.toArray()).toEqual([1])

        const deletedNode3 = linkedList.deleteTail();
        expect(deletedNode3.value).toBe(1);
        expect(linkedList.toArray()).toEqual([]);
        expect(linkedList.head).toBeNull;
        expect(linkedList.tail).toBeNull;
    });

     
    it ('should delete linked list head', () => {
        const linkedList = new LinkedList();
        expect(linkedList.deleteHead()).toBeNull();

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(3);

        const deletedNode1 = linkedList.deleteHead()
        expect(deletedNode1.value).toBe(1)
        expect(linkedList.toArray()).toEqual([2, 3]);
        expect(linkedList.head.value).toBe(2);
        expect(linkedList.tail.value).toBe(3);

        const deletedNode2 = linkedList.deleteHead()
        expect(deletedNode2.value).toBe(2)
        expect(linkedList.toArray()).toEqual([3]);
        expect(linkedList.head.value).toBe(3);
        expect(linkedList.tail.value).toBe(3);

        const deletedNode3 = linkedList.deleteHead()
        expect(deletedNode3.value).toBe(3)
        expect(linkedList.toArray()).toEqual([]);
        expect(linkedList.head).toBeNull;
        expect(linkedList.tail).toBeNull;
    });

    
    
    it('should create linked list from array', () => {
        const linkedList = new LinkedList();

        linkedList.fromArray([1, 2, 2, 3, 3, 4, 5]);
        expect(linkedList.toArray()).toEqual([1, 2, 2, 3, 3, 4, 5]);
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(5);

        linkedList.fromArray([6]);
        expect(linkedList.toArray()).toEqual([6])
        expect(linkedList.head.value).toBe(6);
        expect(linkedList.tail.value).toBe(6)

        linkedList.fromArray([]);
        expect(linkedList.toArray()).toEqual([])
        expect(linkedList.head).toBeNull()
        expect(linkedList.tail).toBeNull()
    })

    
    it('should reverse linked list', () => {
        const linkedList = new LinkedList();

        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);

        linkedList.reverse();
        expect(linkedList.toArray()).toEqual([3, 2, 1])
        expect(linkedList.head.value).toBe(3);
        expect(linkedList.tail.value).toBe(1);

        linkedList.reverse();
        expect(linkedList.toArray()).toEqual([1, 2, 3]);
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.tail.value).toBe(3);


        linkedList.fromArray([4, 5]);
        linkedList.reverse();
        expect(linkedList.toArray()).toEqual([5, 4])
        expect(linkedList.head.value).toBe(5);
        expect(linkedList.tail.value).toBe(4);

        linkedList.fromArray([6]);
        linkedList.reverse();
        expect(linkedList.toArray()).toEqual([6])
        expect(linkedList.head.value).toBe(6);
        expect(linkedList.tail.value).toBe(6);
    })
})
