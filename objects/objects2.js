const obj = {
  name: "Dilli",
  age: 24,
  address: {
    city: "Chittoor",
    state: "Andhra Pradesh",
  },
  scores: [23, 34, 45, 56, 56, 67],
  points: [{ first: 1 }],
  distance: ["ramu", [23, 45], 90],
  date: new Date(),
  map: new Map([["key", "value"]]),
  set: new Set([1, 2, 3]),
  symbol: Symbol("key"),
  bigInt: 123n,
  getStatus: function () {
    name: "surya";
  },
  faslyValues: [null, 0, "", undefined, -5, false],
  identity: null,
};

const obj2 = { ...obj }; // shallow Copy - it will not copy nested objects or arrays, neted obj and arrays in obj and obj2 will point to the same refarance.
// Both use reference-based storage for nested data
// to avoid the above bugs, to break the line we need to do deep copy, use structuredClone() method, which recursively copies every level of data.

// When we do shallow copy only top level proerties are copied
console.log((obj2.name = "Prasad")); // prasad
console.log(obj.name); // Dilli

// ex: modifying arrays reference type
console.log((obj2.scores[0] = 90)); //90
console.log(obj.scores[0]); // 90 - because only array container [] got copied, not content.

console.log((obj2.points[0] = { first: 2 })); // {first: 2}
console.log(obj.points[0]); // {first: 2} // same here container got copied not content. array reference changed but nested non-primitive types still refer both to the same reference.

console.log((obj2.distance[1][0] = 1000)); // 1000
console.log(obj.distance[1][0]); // 1000

console.log((obj2.address.city = "Thavanampalli")); // thavanampalli
console.log(obj.address.city); // thavanampalli - original object also modified.

// structuredClone recursively copies all levels of data
const obj3 = structuredClone(obj); // structuredClone creates deep copy
console.log((obj3.address.state = "Karnataka")); // karnataka
console.log(obj.address.state); // Andhra Pradesh

console.log((obj3.scores[0] = 100)); // 100
console.log(obj.scores[0]); // 90 not changed to 100, in the above it is 23 but later we have updated it so 90.

console.log((obj3.points[0] = { first: 3 })); // {first: 3}
console.log(obj.points[0]); // {first: 2} // in the above obj it is {first:1}, but in the above consoles it is updated.

console.log((obj3.distance[1][0] = 3000)); // 3000
console.log(obj.distance[1][0]); // 1000 // in the above obj it is 23 only, but the above conosle obj2 modified to 1000 so original also got updated.

function customDeepCopy(obj) {
  const copyObj = {};
  Object.keys(obj).forEach((key) => {
    copyObj[key] =
      typeof obj[key] === "object" && obj[key] !== null
        ? customDeepCopy(obj[key])
        : obj[key];
  });
  return copyObj;
}

const obj4 = customDeepCopy(obj);
console.log(obj4);
// custom deep copy obj
// {
//   name: 'Dilli',
//   age: 24,
//   address: { city: 'Chittoor', state: 'Andhra Pradesh' },
//   scores: { '0': 23, '1': 34, '2': 45, '3': 56, '4': 56, '5': 67 },
//   points: { '0': { first: 1 } },
//   distance: { '0': 'ramu', '1': { '0': 23, '1': 45 }, '2': 90 },
//   getStatus: [Function: getStatus],
//   faslyValues: { '0': null, '1': 0, '2': '', '3': undefined, '4': -5, '5': false },
//   identity: null
// }
// original obj
// {
//   name: 'Dilli',
//   age: 24,
//   address: { city: 'Chittoor', state: 'Andhra Pradesh' },
//   scores: [ 23, 34, 45, 56, 56, 67 ],
//   points: [ { first: 1 } ],
//   distance: [ 'ramu', [ 23, 45 ], 90 ],
//   getStatus: [Function: getStatus],
//   faslyValues: [ null, 0, '', undefined, -5, false ],
//   identity: null
// }

// here arrays are not handled correctly, so all arrays are converted to objects

function customDeepCopywithArrays(val) {
  // if not object/array or null return as is
  if (val === null || typeof val !== "object") {
    return val;
  }
  // handle arrays
  if (Array.isArray(val)) {
    return val.map((item) => customDeepCopywithArrays(item));
  }

  // handle objects
  const copyObj = {};
  Object.keys(val).forEach((key) => {
    copyObj[key] = customDeepCopywithArrays(val[key]);
  });
  return copyObj;
}

const jsonDeepCopy = JSON.parse(JSON.stringify(original));
// Dates are converted to strings, undefined are converted to nulls, Maps/Sets lost, functions lost.

const obj6 = structuredClone(obj); // we will get error if they have functions
// Dates, undefined, Map/Sets, BigInt are preserved as is

const obj7 = Object.assign({}, obj); 
console.log("Object.assign:", obj7);

const obj8 = {...obj}; 
console.log("Spread Operator", obj8)

// shallow copy using foreach
const shallowCopyy = {};

Object.keys(originall).forEach((key) => {
  shallowCopyy[key] = originall[key];
});

// ------------------------------------------------------------------------------------------
// Original Object: {
//   name: 'Dilli',
//   age: 24,
//   address: { city: 'Chittoor', state: 'Andhra Pradesh' },
//   scores: [ 23, 34, 45, 56, 56, 67 ],
//   points: [ { first: 1 } ],
//   distance: [ 'ramu', [ 23, 45 ], 90 ],
//   date: 2026-01-21T13:58:38.340Z,
//   map: Map(1) { 'key' => 'value' },
//   set: Set(3) { 1, 2, 3 },
//   symbol: Symbol(key),
//   bigInt: 123n,
//   getStatus: [Function: getStatus],
//   faslyValues: [ null, 0, '', undefined, -5, false ],
//   identity: null
// }
// customDeepCopy: {
//   name: 'Dilli',
//   age: 24,
//   address: { city: 'Chittoor', state: 'Andhra Pradesh' },
//   scores: { '0': 23, '1': 34, '2': 45, '3': 56, '4': 56, '5': 67 },
//   points: { '0': { first: 1 } },
//   distance: { '0': 'ramu', '1': { '0': 23, '1': 45 }, '2': 90 },
//   date: {},
//   map: {},
//   set: {},
//   symbol: Symbol(key),
//   bigInt: 123n,
//   getStatus: [Function: getStatus],
//   faslyValues: { '0': null, '1': 0, '2': '', '3': undefined, '4': -5, '5': false },
//   identity: null
// }
// customDeepCopywithArrays: {
//   name: 'Dilli',
//   age: 24,
//   address: { city: 'Chittoor', state: 'Andhra Pradesh' },
//   scores: [ 23, 34, 45, 56, 56, 67 ],
//   points: [ { first: 1 } ],
//   distance: [ 'ramu', [ 23, 45 ], 90 ],
//   date: {},
//   map: {},
//   set: {},
//   symbol: Symbol(key),
//   bigInt: 123n,
//   getStatus: [Function: getStatus],
//   faslyValues: [ null, 0, '', undefined, -5, false ],
//   identity: null
// }
// jsonDeepCopy: {
//   name: 'Dilli',
//   age: 24,
//   address: { city: 'Chittoor', state: 'Andhra Pradesh' },
//   scores: [ 23, 34, 45, 56, 56, 67 ],
//   points: [ { first: 1 } ],
//   distance: [ 'ramu', [ 23, 45 ], 90 ],
//   date: '2026-01-21T13:58:38.340Z', // date is converted to string
//   map: {},
//   set: {}, // symbol and function got lost/dropped and BigInt will give error. - TypeError: Do not know how to serialize a BigInt at JSON.stringify (<anonymous>)
//   faslyValues: [ null, 0, '', null, -5, false ],
//   identity: null
// }
// structuredClone: {
//   name: 'Dilli',
//   age: 24,
//   address: { city: 'Chittoor', state: 'Andhra Pradesh' },
//   scores: [ 23, 34, 45, 56, 56, 67 ],
//   points: [ { first: 1 } ],
//   distance: [ 'ramu', [ 23, 45 ], 90 ],
//   date: 2026-01-21T14:02:59.942Z,
//   map: Map(1) { 'key' => 'value' },
//   set: Set(3) { 1, 2, 3 },
//   bigInt: 123n,  // Symbol and Function will throw Error. DOMException [DataCloneError]: Symbol(key) could not be cloned.
//   faslyValues: [ null, 0, '', undefined, -5, false ],
//   identity: null  //  const serializedData = nativeStructuredClone(value, idlOptions); DOMException [DataCloneError]: function () { name: "surya"} could not be cloned.
// }

// shallow Copy
// Object.assign: {
//   name: 'Dilli',
//   age: 24,
//   address: { city: 'Chittoor', state: 'Andhra Pradesh' },
//   scores: [ 23, 34, 45, 56, 56, 67 ],
//   points: [ { first: 1 } ],
//   distance: [ 'ramu', [ 23, 45 ], 90 ],
//   date: 2026-01-21T14:29:53.106Z,
//   map: Map(1) { 'key' => 'value' },
//   set: Set(3) { 1, 2, 3 },
//   symbol: Symbol(key),
//   bigInt: 123n,
//   getStatus: [Function: getStatus],
//   faslyValues: [ null, 0, '', undefined, -5, false ],
//   identity: null
// }
// Spread Operator {
//   name: 'Dilli',
//   age: 24,
//   address: { city: 'Chittoor', state: 'Andhra Pradesh' },
//   scores: [ 23, 34, 45, 56, 56, 67 ],
//   points: [ { first: 1 } ],
//   distance: [ 'ramu', [ 23, 45 ], 90 ],
//   date: 2026-01-21T14:29:53.106Z,
//   map: Map(1) { 'key' => 'value' },
//   set: Set(3) { 1, 2, 3 },
//   symbol: Symbol(key),
//   bigInt: 123n,
//   getStatus: [Function: getStatus],
//   faslyValues: [ null, 0, '', undefined, -5, false ],
//   identity: null
// }

// shallowCopyForEach: {
//   name: 'Dilli',
//   age: 24,
//   address: { city: 'Chittoor', state: 'Andhra Pradesh' },
//   scores: [ 23, 34, 45, 56, 56, 67 ],
//   points: [ { first: 1 } ],
//   distance: [ 'ramu', [ 23, 45 ], 90 ],
//   date: 2026-01-21T14:33:47.182Z,
//   map: Map(1) { 'key' => 'value' },
//   set: Set(3) { 1, 2, 3 },
//   symbol: Symbol(key),
//   bigInt: 123n,
//   getStatus: [Function: getStatus],
//   faslyValues: [ null, 0, '', undefined, -5, false ],
//   identity: null
// }
