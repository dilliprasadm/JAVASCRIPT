// Objects
// An object is a collection of key-value pairs.
// Objects are not primitive data types, they are non-primitive data types.
// Objects are stored by reference, not by value.
// In JavaScipt, when use an object as a key in another object, it is converted to a string.
// By default, the toString() method of an object returns "[object Object}".
// Therefore, when we use different objects as keys, they all convert to the same string "[object Object]", leading to key collisions.
// As a result, the last assignment to that key will overwrite any previous assignments.

const obj1 = {};
const obj2 = { name: "Dilli" };
const obj3 = { name: "Prasad" };

obj1[obj2] = { name: "Reddy" };

console.log(obj1[obj2]); // output? name: "Reddy"
console.log(obj1); // output? // output
// when use object as Key, it converts to string "[object Object]", so output is { "[object Object]" :



// Yes, you can use forEach to create a shallow copy, but not a deep copy (without additional logic).
const original = { a: 1, b: 2, c: 3 };
const shallowCopy = {};

Object.keys(original).forEach((key) => {
  shallowCopy[key] = original[key];
});

console.log(shallowCopy); // { a: 1, b: 2, c: 3 }
console.log(shallowCopy === original); // false ✓ (different objects)

// The Problem with Nested Objects (Shallow Copy Issue):
const originall = { a: 1, b: { c: 2 } };
const shallowCopyy = {};

Object.keys(originall).forEach((key) => {
  shallowCopyy[key] = originall[key];
});

shallowCopyy.b.c = 999;
console.log(originall.b.c); // 999 (original changed! ✗)
// In this case, modifying shallowCopy.b.c also affects original.b.c because both objects reference the same nested object.





// Shallow Copy using spread operator or Object.assign():
const originalObj = { a: 1, b: { c: 2 } };
const shallowCopyObj1 = { ...originalObj };
const shallowCopyObj2 = Object.assign({}, originalObj);

shallowCopyObj1.b.c = 888;
console.log(originalObj.b.c); // 888 (original changed! ✗)
shallowCopyObj2.b.c = 777;
console.log(originalObj.b.c); // 777 (original changed! ✗)

// Limitations of spread operator and Object.assign():
// - They only create shallow copies.
// - Nested objects or arrays are still referenced, not cloned.
// - For deep copying, consider using structuredClone(), JSON methods, or libraries like Lodash.
// -----------------------------------------------------------------------------------------------------------------------------



// For deep copying, consider using structuredClone(), JSON methods, or libraries like Lodash.
// For Deep Copy, You Need Recursion:
// Summary: forEach alone creates only shallow copies. For deep copies, you need recursion or built-in methods like JSON.parse(JSON.stringify()) or structuredClone().
const original1 = { a: 1, b: { c: 2 } };

function customDeepCopy(obj) {
  const copy = {};
  Object.keys(obj).forEach((key) => {
    copy[key] = typeof obj[key] === "object" && obj[key] !== null
        ? customDeepCopy(obj[key])
        : obj[key];
  });
  return copy;
}

const deepCopyObj = customDeepCopy(original1);
deepCopyObj.b.c = 999;
console.log(original1.b.c); // 2 (original unchanged ✓)





// 1. JSON.parse(JSON.stringify())
const original2 = {
  a: 1,
  b: { c: 2, d: 3 },
  e: [1, 2, { f: 4 }],
};

const jsonDeepCopy = JSON.parse(JSON.stringify(original));

jsonDeepCopy.b.c = 999;
// jsonDeepCopy.e[2].f = 888;

console.log(original2.b.c); // 2 (unchanged ✓)
console.log(original2.e[2].f); // 4 (unchanged ✓)
console.log(jsonDeepCopy); // { a: 1, b: { c: 999, d: 3 }, e: [1, 2, { f: 888 }] }

// Limitations of JSON.parse(JSON.stringify()):
const original3 = {
  name: "John",
  date: new Date(), // ✗ Becomes string
  func: () => {}, // ✗ Lost (undefined)
  undefined: undefined, // ✗ Lost
  symbol: Symbol("key"), // ✗ Lost
  circular: null, // Circular reference
};

// circular.circular = original; // ✗ Will throw error!
// bigInt: 123n, // ✗ Will throw error!

const copy = JSON.parse(JSON.stringify(original3));
console.log(copy.date); // "2025-12-21T..." (string, not Date)
console.log(copy.func); // undefined (function lost)







// 2. structuredClone() (Modern Alternative)
const original4 = {
  a: 1,
  b: { c: 2, d: 3 },
  e: [1, 2, { f: 4 }],
};

const structuredCloneDeepCopy = structuredClone(original4);

structuredCloneDeepCopy.b.c = 999;
structuredCloneDeepCopy.e[2].f = 888;

console.log(original4.b.c); // 2 (unchanged ✓)
console.log(original4.e[2].f); // 4 (unchanged ✓)

//Advantages of structuredClone():
const original5 = {
  name: "John",
  date: new Date(), // ✓ Preserved as Date object
  map: new Map([["key", "value"]]), // ✓ Preserved as Map
  set: new Set([1, 2, 3]), // ✓ Preserved as Set
  bigInt: 123n, // ✓ Preserved
  undefined: undefined, // ✓ Preserved
};

const copy1 = structuredClone(original5);
console.log(copy1.date instanceof Date); // true ✓
console.log(copy1.map instanceof Map); // true ✓
console.log(copy1.set instanceof Set); // true ✓
console.log(copy1.bigInt); // 123n ✓

// Limitation of structuredClone():
// - Cannot clone functions or objects with circular references
// - May not work in older browsers (e.g., Internet Explorer)

const original6 = {
  func: () => "hello", // ✗ Will throw error
  circular: null,  // Circular reference
  symbol: Symbol("key"), // ✗ Will throw error
};





// structuredClone(original6); // Error: Function cannot be cloned
// Use structuredClone() when possible — it's more robust and handles edge cases better!

//       Comparison Table:
// Feature	        forEach	    JSON.stringify	  structuredClone
// Nested Objects 	✗ Shallow	  ✓ Deep	          ✓ Deep
// Nested Arrays	  ✗ Shallow	  ✓ Deep	          ✓ Deep
// Dates	          -	          ✗ String	        ✓ Date
// Maps/Sets	      -	          ✗ Lost	          ✓ Preserved
// Functions	      -	          ✗ Lost	          ✗ Error
// Undefined	      -	          ✗ Lost	          ✓ Preserved
// BigInt	          -	          ✗ Error	          ✓ Preserved
// Browser Support	All	All	Modern (90%+)
