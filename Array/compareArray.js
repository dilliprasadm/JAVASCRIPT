// In javaScript primitive types(strings, number, ...) are compared by value, and Arrays, Objects, functions are compared by refarance.
// So, Non primitive types like Arrays, functions, objects are compared by reference.
// To compare values of arrays, we can compare by individual values or by some helper function.
// we can use JSON.stringfy to compare two arrays values are equal. It is used for simple arrays, and by default it recursively compare nested arrays too. it compare by converting to plain text.
// ex: a=[1,2,3], b=[1,2,3] it will convert to text format '[1,2,3]' === '[1,2,3]' return true.
// ex2: '[1,[2],3]' === '[1,[2],3]' return true.
// it is useful for simple and deeply nested arrays
// its perfomance is slower (serializes everthing)
// Data loss is there, like undefined, functions, and symbols are omitted(in objects), or converted to null in arrays.

let arr1 = [3, 6, 4, [5], 9];
let arr2 = [3, 6, 4, [5], 9];
let arr3 = [3, 6, 4, 9];
let arr4 = [3, 6, 4, 9];
console.log("JSON Array Com", JSON.stringify(arr1) === JSON.stringify(arr2)); // true


console.log("JSON Array with falsly values", JSON.stringify([undefined, 1,2, null, "", false, 0, 3, 4, "Ramu", function(){}, {some: "somedata"}, {}]) === JSON.stringify([undefined, 1,2, null, "", false, 0, 3, 4, "Ramu", function(){}, {some: "somedata"}, {}]));
const arrayWithFalsly1 = JSON.stringify([undefined, 1,2, null, "", " ", false, [Symbol('id')], 0, 3, NaN, Infinity, -Infinity, 4, "Ramu", function(){}, {some: "somedata"},{}, { a: Symbol('id') }, {a:1}]);
console.log("arrayWithFalsly1", arrayWithFalsly1);

// const arrayWithFalsly2 = JSON.stringify([BigInt(10)]);
// this will throw error as BigInt is not supported in JSON, it doesn't know how to handle it.
// console.log("arrayWithFalsly2", arrayWithFalsly2);

// RegExp, Map, Set: These are typically converted into empty objects ({}).
const obj = { pattern: /abc/gi };
console.log("Obj with regex pattern",JSON.stringify(obj)); 
// Output: {"pattern":{}}
const myMap = new Map();
myMap.set("key", "value");
console.log("Array with falsy Map",JSON.stringify(myMap)); 
// Output: {}
const mySet = new Set([1, 2, 3]);
console.log("Array with falsy Set",JSON.stringify({ data: mySet })); 
// Output: {"data":{}}


// we can use array method called every() to check if values are equal
// but if will only check the top layer of the array, for nested arrays it will not work. to make it work for nested arrays we need to call recursively to check deeply nested arrays.
// it is useful for large, flat and complex types array data comparisions
// it is faster as even if one element doesn't match it return false
// to work for nested arrays, requires a recursive funciton.

const arrayEqual = arr1.every((value, index) => value === arr2[index]);
const arrayEqual2 = arr3.every((value, index) => value === arr4[index]);
console.log("Array every method", arrayEqual); // false
console.log("Array every method", arrayEqual2); // true
// this will only work for flat arrays, for nested arrays below is the code
const myArr = [1, 2, 3];
const anotherRef = myArr;

function checkArrayEqual(array1, array2) {
  // it will check both reference and primitive values
  if (array1 === array2) return true;

  if (Array.isArray(array1) && Array.isArray(array2)) {
    if (array1.length !== array2.length) return false;
    return array1.every((item, index) => checkArrayEqual(item, array2[index]));
  }

  return false;
}

console.log(checkArrayEqual()); // undefined arrays
console.log(checkArrayEqual(myArr, anotherRef)); // true
console.log(checkArrayEqual(arr1, arr2)); // true
console.log(checkArrayEqual([1, [2, 3]], [1, [2, 3]])); // true
console.log(checkArrayEqual([1, [2, 3]], [1, [2, 4]])); // false
console.log(checkArrayEqual([undefined, 1,2, null, "", false, 0, 3, 4, "Ramu"], [undefined, 1,2, null, "", false, 0, 3, 4, "Ramu"]));
