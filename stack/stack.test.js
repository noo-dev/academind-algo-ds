const Stack = require('./stack')

describe('Stack', () => {
    it("should create empty stack", () => {
        const stack = new Stack()
        expect(stack).not.toBeNull();
        expect(stack.list).not.toBeNull();
    })

    it("should stack data to stack", () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);

        expect(stack.toArray()).toEqual([1, 2])
    })

    it('should peek data from stack', () => {
        const stack = new Stack();
    
        expect(stack.peek()).toBeNull();
    
        stack.push(1);
        stack.push(2);
    
        expect(stack.peek()).toBe(2);
        expect(stack.peek()).toBe(2);
    });

    it('should check if stack is empty', () => {
        const stack = new Stack();

        expect(stack.isEmpty()).toBeTruthy();

        stack.push(1);

        expect(stack.isEmpty()).toBeFalsy();
    }) 

    it('should pop data from stack', () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);

        expect(stack.pop()).toBe(2)
        expect(stack.pop()).toBe(1)
        expect(stack.pop()).toBeNull()
        expect(stack.isEmpty()).toBe(true)
    })
    
    it('should be possible to convert stack to array', () => {
        const stack = new Stack();
    
        expect(stack.peek()).toBeNull();
    
        stack.push(1);
        stack.push(2);
        stack.push(3);
    
        expect(stack.toArray()).toEqual([1, 2, 3]);
    });

    it('should be possible to push/pop objects', () => {
        const stack = new Stack();
    
        stack.push({ value: 'test1', key: 'key1' });
        stack.push({ value: 'test2', key: 'key2' });
    
    
        expect(stack.pop().key).toBe('key2');
        expect(stack.pop().value).toBe('test1');
    });
})