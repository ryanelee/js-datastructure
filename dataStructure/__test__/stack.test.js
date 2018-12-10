import Stack from '../stack';

describe('Stack -> LIFO', () => {
    it('should push items to top', () => {
        const stack = new Stack(1,2,3);
        const length = stack.push(4);

        expect(length).toBe(4);
        expect(stack.stack).toEqual([4,1,2,3]);
    })

    it('should pop top item', () => {
        const stack = new Stack(1,2,3);
        stack.push(7);
        stack.push(8);
        stack.push(6);
        const val = stack.pop();

        expect(val).toBe(6);
        expect(stack.stack).toEqual([ 8, 7, 1, 2, 3 ]);
    })
})