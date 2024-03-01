const Queue = require('./queue')

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  })

  it('should create empty queue', () => {
    console.log(queue)
    expect(queue).not.toBeNull();
  })

  it('should enqueue data queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.toArray()).toEqual([1, 2]);
  })

  it('should dequeue from queue in FIFO order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1)
    expect(queue.toArray()).toEqual([2])
    expect(queue.dequeue()).toBe(2)
  })
});