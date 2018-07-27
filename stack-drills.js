'use strict';

const Stack = require('./stack.js');

const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

function peek(stack) {
  return stack.top.value;
}
// console.log(peek(starTrek));

function display(stack) {
  const output = [];
  let currNode = stack.top;
  while (currNode.next !== null) {
    output.push(currNode.value);
    currNode = currNode.next;
  }
  output.push(currNode.value);
  return output;
}
// console.log(display(starTrek));
