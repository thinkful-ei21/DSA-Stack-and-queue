'use strict';

const Stack = require('./stack.js');

const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
starTrek.push('Sulu');
starTrek.push('data');
starTrek.push('picard');

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

function searchremove(value,stack){
  //
  let node = stack.top
  let i = 1;
  while(node.value !== value){
    node = node.next
    i += 1;
  }
  for (let j = 0; j< i; j++){
    stack.pop()
  }

}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // your code goes here
    const tempstack = new Stack();
    let currNode = tempstack.top;
    let newstring = '';
    for(let i = 0; i < s.length; i++){
       tempstack.push(s[i]);
    }
    console.log(display(tempstack));
    while(currNode){
       newstring = newstring + tempstack.pop();
      currNode = currNode.next
    }
    console.log(newstring);
    return s === newstring;
}
console.log(is_palindrome("dad"));

//searchremove('McCoy',starTrek);

// console.log(display(starTrek));
