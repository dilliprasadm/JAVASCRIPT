// Function Execution Context
// When a function is called, a new Execution Context is created. What is the correct order of operations during the 'Creation Phase' of this context?

// During the creation phase of a function’s Execution Context, the engine performs these operations in order:
// 1. Creates the Variable/Environment Object
// Allocates memory for parameters, function declarations, and variables.
// Parameters and var declarations are created as properties; variables get the initial value undefined, functions get their full definitions.
// 2. Creates the Scope Chain
// Links the current context’s Variable Object to its outer lexical environments.
// This chain is what enables lexical scope and closure behavior.
// 3. Determines the value of this
// Sets this based on how the function was called (e.g. simple call, method call, new, call/apply/bind).
// So the correct order in the creation phase is:
// (1) Variable Object / environment setup → (2) Scope chain creation → (3) this binding.

// Ex: Consider this code and walk through its function Execution Context during the creation phase:
var x = 1;

function outer(a) {
  var b = 2;

  function inner(c) {
    var d = 4;
    console.log(a, b, c, d, this);
  }

  inner(3);
}

outer(10);

// 1) Creation phase of outer’s Execution Context
// When outer(10) is called, before any line inside outer runs, the engine does:
// Create Variable/Environment Object for outer
// Conceptually:

// Variable object / environment record of `outer`
// {
//   arguments: { 0: 10, length: 1 },
//   a: 10,           // parameter
//   b: undefined,    // var b declaration
//   inner: <function> // function inner(c) {...}
// }

// . a gets the argument value 10.
// . b is created and set to undefined (only declaration processed).
// . inner is fully initialized as a function.

// Create scope chain for outer
// The scope chain for outer points to:
// [ outer’s environment ] --> [ global environment ]
// So if outer references x, the engine can walk from outer’s variables to the global x.
// Determine this for outer
// If outer(10) is called in non–strict mode at global scope: this inside outer is the global object (window in browsers).
// In strict mode, this would be undefined.
// At this point, no line of outer’s body has executed yet; only the environment is set up.
// 2) Creation phase of inner’s Execution Context
// When inner(3) is called inside outer, a new Execution Context is created for inner:

// Variable/Environment Object for inner
// Variable object / environment record of 'inner'
// {
//   arguments: { 0: 3, length: 1 },
//   c: 3,          // parameter
//   d: undefined   // var d declaration
// }

// Scope chain for inner

// [ inner’s environment ] --> [ outer’s environment ] --> [ global environment ]
// That chain is what allows inner to access a, b, and x.

// this binding for inner

// Called as inner(3) (simple call), so in non–strict mode this is again the global object; in strict mode, undefined.
// Only after these three steps are done does the engine enter the execution phase for inner, run var d = 4;, and then execute console.log(a, b, c, d, this);


// The output is 10 2 3 4 window (in browsers) or 10 2 3 4 global (in Node.js non-strict mode).

// How values are resolved
// During inner's execution phase, after creation phase setup:
// console.log(a, b, c, d, this);
// a: 10 → From outer's environment (parameter) via scope chain.
// ​b: 2 → From outer's environment (var b = 2; executed before inner(3) call).
// ​c: 3 → From inner's own environment (parameter).
// ​d: 4 → From inner's own environment (var d = 4; executed just before log).
// ​this: window/global → Bound during inner's creation phase (simple function call in non-strict mode).

// Scope chain lookup order
// When console.log(a, b, c, d) runs inside inner:

// c, d → inner's environment ✓
// a, b → outer's environment ✓ (via scope chain)
// x → global environment (if needed)

// This demonstrates closure: inner captures and accesses outer's variables even after outer finishes.
