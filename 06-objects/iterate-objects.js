// Objects are NOT directly iterable

// 🚀 Golden Rule (remember this)
// Arrays → use for, forEach, for...of
// Objects → use Object.keys / values / entries

const obj = { apple: 2, banana: 1 };

// ❌This will not Work
// for(let item of obj){} // error - TypeError: obj is not iterable
// objects are not iterable by default

// We can these ways to iterate over an object
// use Object.entries to get key-value pairs

// Object.keys()
console.log("Object Keys:", Object.keys(obj)); // ouput: ['apple', 'banana']
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
// output:
// apple 2
// banana 1

// Object.values()
console.log("Object Values:", Object.values(obj)); // ouput: [2, 1]
Object.values(obj).forEach((value) => {
  console.log(value);
});
// output:
// 2
// 1

// Object.entries()  ⭐Most Useful
console.log("Object Entries:", Object.entries(obj)); // ouput: [['apple', 2],['banana', 1]]
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});
// output:
// apple 2
// banana 1

// or

// with For...of
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
// output:
// apple 2
// banana 1


const obj2 = {"dilli": 45, "2342": 89, a:90, [435]: "sdfso", "{somfrew}": "vbdhj", 900: "sdfs", true:"sdfs"}

console.log(typeof obj2[1]) // undefined
console.log(obj2[2342]) // 89
console.log(Object.keys(obj2))  // ['435', '900', '2342', 'dilli', 'a', '{somfrew}', 'true']

obj3 = {pin :  "prasad"}
obj2[obj3] = "object as key" //  this will add as '[object Object]': 'object as key' because, by default toString method is applied to keys
console.log(obj.toString())
console.log(obj2)