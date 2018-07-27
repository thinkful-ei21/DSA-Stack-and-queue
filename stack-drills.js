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
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

function matchParan(str) {
  const tempStack = new Stack();
  // parse str
  for (let i = 0; i < str.length; i ++) {
    // push any '(' into a stack
    if (str[i] === '(') {
      tempStack.push(str[i]);
    }
    // if parsing finds a ')', we pop the stack
    if (str[i] === ')') {
      // and if string is closed before any opens are detected, meaning if we pop an empty stack, return 'error at location'
      if (tempStack.top === null) {
        return `Error: Close paranthesis found at column ${i}`;
      } else {
        tempStack.pop();
      }
    }
  }
  // by end of parsing, stack should be empty if str property opened/closed
  // but if string is open, stack will have something in it, so return 'error, string opened
  if (tempStack.top) {
    return 'Error: string is open';
  }
  return 'String is OK';
}
// console.log(matchParan('abc(d)e')); // expect 'string ok'
// console.log(matchParan('abc(de')); // expect 'error: string open'
// console.log(matchParan('abc)de')); // expect 'error: string closed at location column x'
// console.log(matchParan('abc(((d)e')); // expect 'error: string open'
// console.log(matchParan('abc(((d))))))e')); // expect 'error: string closed at column x'

function matchAnyParan(str) {
  const tempStack = new Stack();
  let expected;
  // parse str
  for (let i = 0; i < str.length; i ++) {
    // push any '(', '{', or '[' into correct stack
    if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
      tempStack.push(str[i]);
      if (str[i] === '(') {
        expected = ')';
      } else if (str[i] === '{') {
        expected = '}';
      } else if (str[i] === '[') {
        expected = ']';
      }
      continue;
    }
    // stack should NOT be popped unless a matched closing paran is parsed
    if (str[i] === ')' && tempStack.top.value !== '(') {
      return `Error: Expected ${expected} at column ${i} but detected ${str[i]} instead`;
    } else if (str[i] === '}' && tempStack.top.value !== '{') {
      return `Error: Expected ${expected} at column ${i} but detected ${str[i]} instead`;
    } else if (str[i] === ']' && tempStack.top.value !== '[') {
      return `Error: Expected ${expected} at column ${i} but detected ${str[i]} instead`;
    } else {
      tempStack.pop();
    }
    // or write it as: pop, unless its a bad case
  }
  // by end of parsing, stack should be empty if str property opened/closed
  // but if string is open, stack will have something in it, so return 'error, string opened
  if (tempStack.top) {
    return 'Error: string is open';
  }
  return 'String is OK';
}
// console.log(matchAnyParan('(){}[]')); // expect ok
// console.log(matchAnyParan('({)}')); // expect error at location 3, stating } is expected but got ) instead
// console.log(matchAnyParan('(((())]')); // expect error at location 3, stating } is expected but got ) instead

// Sort Stack
// Write a program to sort a stack such that the smallest items are on the top
// (in ascending order).
// You can use an additional stack,
//  but you may not use any other data structure (such as an array, or linked list).

function sortStack(ustack){
  let currNode = ustack.top;
  let nextNode = currNode.next;
  let sorted = new Stack();
  let highest = currNode.value;
//////if currNode is < ustack.top move through the stack
  while(currNode.value < nextNode.value){
    currNode = currNode.next.value
    //console.log(currNode);

    nextNode = nextNode.next;
  } ////determine highest value for stack 
  if (currNode.value > nextNode.value){
    highest = currNode.value
  }
  // if (highest == ustack.top.value){
  //
  // }

  if(currNode ===  null){
    return "stack sorted"
  }
  return highest;
}

let newstack = new Stack();

newstack.push(1);
newstack.push(2);
newstack.push(5);
newstack.push(10);
newstack.push(4);
newstack.push(7);
newstack.push(4);
console.log(sortStack(newstack));
