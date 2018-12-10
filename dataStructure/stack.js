export default class Stack {
    constructor(...items) {
        this.stack = [...items];
    }

    push(...items) {
        return this.stack.unshift(...items);
    }

    pop() {
        return this.stack.shift();
    }
}