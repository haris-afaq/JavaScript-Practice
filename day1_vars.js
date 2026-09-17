/*
for documentation use MDN web docs => url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
and 
TC39 ecma => url: https://tc39.es/ecma262/
*/

/* 
Vars in JavaScript

Definition:
A variable is a container used to store data. JavaScript has three ways to declare variables:
1) let
2) const
3) var
For modern JavaScript, mainly use let and const.

1) let: Use let when the value can change.
2) const: Use const when you don't want to reassign the variable.
*/

// Let vars

let firstName = "Harix";
let lastName = "Afaq";
console.log(`Hello ${firstName + lastName}`);

// now suppose we want to change the values of the vars
firstName = "Arish";
lastName = "Khattak";
console.log(`Hello ${firstName + lastName}`);

// Const 

const age =24;
console.log(`Age: ${age}`);