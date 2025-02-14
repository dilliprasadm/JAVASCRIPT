// ********** HOISTING IN JAVASCRIPT **********
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
// This allows you to call functions before they have been declared in your code.

// In JavaScript, when a script runs, the JavaScript Engine creates an Execution Context, which consists of two main phases:
// 1. Memory Creation Phase (Creation Phase)
// Also called the "Hoisting Phase" or "Initialization Phase." — which is part of JavaScript's compilation process.
// During this phase, the JavaScript engine scans the code and allocates memory.
// Before executing the code, JavaScript allocates memory for:
// Variables (var, let, const)
// Functions
// What Happens:
// var variables are hoisted and set to undefined.
// let and const variables are hoisted but kept in the Temporal Dead Zone (TDZ) until their declaration.
// Function declarations are hoisted with their entire definition.

console.log(x); // undefined (hoisted)
// console.log(y); // ReferenceError (hoisted but in TDZ) ReferenceError: Cannot access 'y' before initialization
console.log(add); // Function is hoisted, so it works

var x = 10;
let y = 20;
const z = 30;

function add() {
  console.log("Addition");
}

// 2. Code Execution Phase
// The actual execution of the code happens in this phase.
// JavaScript assigns values to variables and executes functions line by line.
// What Happens:
// var gets assigned its actual value.
// let and const move out of the TDZ and get assigned.
// Functions get executed when called.

var x = 10; // Now x = 10 (no longer undefined)
let y1 = 20; // Now y1 = 20 (out of TDZ)
const z1 = 30; // Now z1 = 30 (out of TDZ)

add(); // Executes and prints "Addition"

function add() {
  console.log("Addition");
}

console.log(a); // ✅ undefined (Hoisted, but not assigned a value)
// console.log(b); // ❌ ReferenceError (Hoisted but in Temporal Dead Zone)
// console.log(c); // ❌ ReferenceError (Hoisted but in Temporal Dead Zone)

a = 10; // No var, let, or const → Becomes a global variable
console.log(a); // ✅ 10

// ("use strict";) In strict mode, it will throw an error.
// "use strict";
a = 10; // ❌ ReferenceError: a is not defined
console.log(a);

var a = 1; // ✅ Hoisted and assigned later
let b = 2; // ✅ Hoisted but in TDZ before assignment
const c = "Apple"; // ✅ Hoisted but in TDZ before assignment

console.log(a); // ✅ 1
console.log(b); // ✅ 2
console.log(c); // ✅ "Apple"

// ✅ Function declaration is fully hoisted
myFunction(); // ✅ "Hello, World!"

function myFunction() {
  console.log("Hello, World!");
}

myFunction(); // ✅ "Hello, World!"

// ❌ Function expression is hoisted as undefined
console.log(d); // ✅ undefined (Hoisted, but no function assigned yet)
d(); // ❌ TypeError: d is not a function (because `d` is `undefined`)

var d = function () {
  console.log("D");
};

d(); // ✅ "D" (Now it works because `d` is assigned)

// Using var:
sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi!");
};

// Using let or const:
sayHello(); // ReferenceError: Cannot access 'sayHello' before initialization
const sayHello = () => {
  console.log("Hello!");
};

// ✅ var declarations are hoisted with undefined as an initial value.
// ✅ let and const are hoisted, but they stay in the Temporal Dead Zone (TDZ) until they are assigned a value.
// ✅ Function declarations are fully hoisted and can be called before their definition.
// ✅ Function expressions (including arrow functions) are hoisted as variables and remain undefined until assigned.
// ✅ Calling a function expression before its assignment results in a TypeError, not a ReferenceError

// Overall, hoisting is a key concept in understanding how JavaScript executes code, especially when dealing with variable and function declarations

// *************** Difference Between var, let, and const (Mutability & Scope) ***************

// Keyword	    Scope	            Can be Redeclared?	Can be Reassigned?	Mutable?
// var	        Function-scoped	    ✅ Yes	            ✅ Yes	         ✅ Yes
// let	        Block-scoped	    ❌ No	            ✅ Yes	         ✅ Yes
// const	    Block-scoped	    ❌ No	            ❌ No	         ❌ No

// ************* Function Scope vs. Block Scope in JavaScript *************

// 1️⃣ Function Scope (Used by var)
// A variable declared with var is only accessible within the function where it was declared.
// If declared outside a function, it becomes global.

function myFunction() {
  var x = 10;
  console.log(x); // ✅ Works: 10
}
// console.log(x); // ❌ Error: x is not defined (because x is function-scoped)

// Block Scope (Used by let and const)
// A variable declared with let or const is only accessible within the block {} where it was declared.
// A block {} is any code inside curly braces, including:
//     Loops (for, while)
//     if statements
//     Functions
// Example: let and const are block-scoped

{
  let a = 20;
  const b = 30;
  console.log(a, b); // ✅ Works: 20 30
}
// console.log(a, b); // ❌ Error: a and b are not defined (outside the block)

// Key Differences Between Function Scope and Block Scope
// Feature	                    var (Function Scope)	            let and const (Block Scope)
// Scope Type	                Function-scoped	                      Block-scoped ({})
// Accessible Outside Block?	✅ Yes	                            ❌ No
// Redeclaration Allowed?	    ✅ Yes	                            ❌ No (let and const can't be redeclared)
// Reassignment Allowed?	    ✅ Yes	                            ✅ Yes (let), ❌ No (const)

function testoutside() {
  function test() {
    if (true) {
      var x = 10;
      let y = 20;
      const z = 30;
    }
    console.log(x); // ✅ Works: 10 (function-scoped)
    // console.log(y); // ❌ Error: y is block-scoped
    // console.log(z); // ❌ Error: z is block-scoped
  }
  test();
  //   console.log(x); // ❌ Error: x is function-scoped
  //   console.log(y); // ❌ Error: y is block-scoped
  //   console.log(z); // ❌ Error: z is block-scoped
}

testoutside();
