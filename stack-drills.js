'use strict';

const Stack = require('./stack.js');

const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
starTrek.push('Sulu');
starTrek.push('Data');
starTrek.push('Picard');

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

function searchAndRemove(value, stack) {
  let currNode = stack.top;
  let i = 1;
  while (currNode.value !== value) {
    currNode = currNode.next;
    i++;
  }
  for (let j = 0; j < i; j++){
    stack.pop();
  }
}
// searchAndRemove('McCoy', starTrek);
// console.log(display(starTrek));

function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  const tempStack = new Stack();
  for (let i = 0; i < str.length; i++) {
    tempStack.push(str[i]);
  }

  let currNode = tempStack.top;
  let newString = '';
  while (currNode) {
    newString = newString + tempStack.pop();
    currNode = currNode.next;
  }

  return str === newString;
}
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));
