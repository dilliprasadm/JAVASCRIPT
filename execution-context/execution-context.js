// ********** EXECUTION CONTEXT & HOISTING IN JAVASCRIPT **********

// var x = 10;
// function test() {
//   console.log("test", x);
//    var x = 20;
// }
// test();
// // Why is here undefined?

// var x = 10;
// function test() {
//   console.log("test", x);
// }
// test();
// var x = 10;
// function test() {
//   console.log("test", x);
//   x=20
// }
// test(); 
// // Why are there in both test 10?

// var x = 10;
// function test() {
//   console.log("test", x);
//   let x=20
// }
// test();
// // Why is there a reference error?

// x = 10;
// function test() {
//   console.log("test", x);
//   var x = 20;
// }
// test();
// // Why is the test undefined?

// x = 10;
// function test() {
//   console.log("test", x);
//   x = 20;
// }
// test();
// // Why here the test is test 10

// let x = 10;
// function test() {
//   console.log("test", x);
//   x = 20;
// }
// test();
// // Why here the test is test 10

// function testing() {
//   // console.log("test ab", ab); // ReferenceError: ab is not defined
//   ab = 20;
// }
// testing();


// HOW Execution Works Internally in JavaScript?

var area = 0;

console.log("area:", area);

function area(){
  console.log("function prints area");
}
// console.log("function calling area:", area()); // TypeError: area is not a function

// internal work for the above code
// 1. Memory Creation Phase
// function area() { ... }  // full function hoisted
// var area;               // var hoisted (no value)
// 💡 Function wins in hoisting priority
// So after hoisting: area → function area() { ... }
// // 2. Code Execution Phase
// Now JS runs top to bottom:
// var area = 0; // assign 0 to area
// 🚨 This line executes BEFORE the function body in the file and it overwrites the function reference.
// ⚠️ Important: Execution order ≠ code appearance order, Hoisting already happened.
// console.log(area); // prints 0
// function area() { ... } ❌ Nothing happens here, The function was already hoisted in phase 1.
// area(); ❌ Boom: TypeError: area is not a function
// Because: area === 0

// Function declarations don’t “run” where they appear.
// They are already placed in memory before execution starts.


// So this code:

// var area = 0;
// function area() {}
// Is effectively treated like this by JS:

// // hoisting phase
// function area() {}
// var area;

// // execution phase
// area = 0;   // overrides function
// 🔥 That’s the missing piece.




console.log("area:", area2);

function area2(){
  console.log("function prints area2");
}

var area2 = 0;

// output for the above code: area: [Function: area2]

area2();

//Now if we call again the output will be:
// area: [Function: area2]
// function prints area2



console.log(area2);

// Her the ouput will be:
// area: [Function: area2]
// function prints area2
// 0

area2();
// Now if we call the function again the output will be:
// area: [Function: area2]
// function prints area2
// 0
// C:\Users\dilli\Dilli Desktop\Practice\JavaScript\execution-context\execution-context.js:120
// area2();TypeError: area2 is not a function


// Why does a Function Expression assigned to a 'var' result in a TypeError if called before its definition, while a Function Declaration does not?
// Function Expression assigned to var (TypeError before definition):
sayHello();  // ❌ TypeError: sayHello is not a function

var sayHello = function() {
  console.log("Hello!");
};

sayHello();  // ✅ Prints "Hello!" (if called after)
// Function Expression (var sayHello = function() {...}):
// During creation phase:
// Only var sayHello is hoisted, initialized to undefined.
// The assignment sayHello = function() {...} happens in execution phase (line by line).
// First sayHello() call reads undefined() → TypeError.
// Function Expression (only var hoisted):
// Engine sees this during creation phase:
// var sayHello;  // undefined
// sayHello();    // TypeError: undefined is not a function

// // Execution phase:
// sayHello = function() { console.log("Hello!"); }


// Key takeaway
// Declarations: Hoisted + initialized = callable anywhere in scope.
// Expressions: Only variable declaration hoisted = undefined until assignment executes.


// Which component of the Execution Context is responsible for tracking 'Outer Environment' references for the Scope Chain?
// The Lexical Environment
// The Lexical Environment consists of an Environment Record and a reference to the outer Lexical Environment, which forms the scope chain.

// How it works
// Each Execution Context contains a LexicalEnvironment component, which has two key parts:
// LexicalEnvironment = {
//   EnvironmentRecord: { /* local variables, functions */ },
//   outer: <reference to outer LexicalEnvironment>
// }

// . EnvironmentRecord: Stores local bindings (variables, functions, parameters).
// . outer: Points to the parent LexicalEnvironment (enclosing scope).

// Scope Chain formation
// When resolving a variable reference, the engine follows this chain:
// Current LexicalEnvironment.outer → Parent.outer → ... → Global → null
// Example from earlier code:
// inner's LexicalEnvironment.outer → outer's LexicalEnvironment → Global

// This chain enables inner() to access a and b from outer().
// Execution Context structure

// ExecutionContext = {
//   LexicalEnvironment: { EnvironmentRecord, outer: <parent ref> },
//   VariableEnvironment: { /* similar structure for var/let/const */ },
//   ThisBinding: <this value>
// }

// The LexicalEnvironment.outer reference is what creates the lexical scope chain during the creation phase.
