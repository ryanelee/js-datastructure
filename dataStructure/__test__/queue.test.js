import Queue from '../queue';

describe('Queue -> FIFO', () => {
    it('should enqueue item to the bottom of queue', () => {
        const queue = new Queue(1,2,3);
        const expectedLength = queue.enqueue(6);

        expect(expectedLength).toBe(4);
        expect(queue.queue).toEqual([1,2,3,6]);
    })

    it('should dequeue item from top', () => {
        const queue = new Queue(1,2,3);
        
        expect(queue.enqueue(5)).toBe(4);        
        expect(queue.dequeue()).toBe(1);
    })
})