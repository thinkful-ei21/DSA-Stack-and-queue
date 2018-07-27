'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    // case: if stack is empty
    if (this.top === null) {
      this.top = new _Node(value, null);
      return this.top;
    }
    // case: if stack is not empty
    const node = new _Node(value, this.top);
    this.top = node;
    return this.top;
  }

  pop() {
    // capture the top item to be popped
    const node = this.top;
    // pop the top of stack
    this.top = node.next;
    // return popped item
    return node.value;
  }
}

module.exports = Stack;
