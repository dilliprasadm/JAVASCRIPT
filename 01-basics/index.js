// Number methods and properties
console.log("Numbers");
console.log(isNaN("dsjhjdsfh"));
console.log(isNaN(90));

console.log(isFinite(987));
console.log(isFinite(Infinity));
console.log(isFinite("dsjhjdsfh"));

console.log(parseInt("  123  "));
console.log(parseInt("123abc"));
console.log(parseFloat("  123.456  "));
console.log(parseFloat("123.456abc"));

console.log(Number.isInteger(90.9));
console.log(Number.isInteger(90));
console.log(Number.parseFloat("90.9089dsjhjdsfh"));
console.log(Number.parseInt("90.9089dsjhjdsfh"));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

console.log(Number("  123  "));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

console.log((123.456).toFixed(2));
console.log((123.456).toPrecision(4));
console.log((232.23243).toPrecision(2));
console.log((255).toString(16));
console.log((255).toString(2));
console.log("sdfd".toString());
console.log((3434).toString());

// Math methods and properties
console.log("Math");
console.log("Math.absolute", Math.abs(-123));
console.log("Math.ceil", Math.ceil(4.3));
console.log("Math.floor", Math.floor(4.7));
console.log("Math.round", Math.round(4.5));
console.log("Math.round", Math.round(4.4));
console.log("Math.max", Math.max(1, 3, 2, 8, 5));
console.log("Math.max", Math.max([1, 3, 2, 8, 5]));
console.log("Math.min", Math.min(1, 3, 2, 8, 5));
console.log("Math.pow", Math.pow(2, 3));
console.log("Math.sqrt", Math.sqrt(16));
console.log("Math.random", Math.random());
console.log("Math.random", Math.random().toFixed(2));
console.log("Math.random", Math.random().toFixed(2) * 100);
console.log("Math.PI", Math.PI);
console.log("Math.sin", Math.sin(Math.PI / 2));
console.log("Math.cos", Math.cos(0));

// nullish coalescing
console.log("Nullish Coalescing");
console.log(null ?? "ifnotnull");
console.log(undefined ?? "ifnotundefined");
console.log((null || undefined) ?? "ifnotnull/undefined");
console.log("" ?? "ifempty");
console.log(0 ?? "ifzero");
console.log(false ?? "iffalse");
console.log(NaN ?? "ifnan");
console.log("something" ?? "notsomething");

console.log("Compare ?? or ||");
console.log(null || "inornull");
console.log(undefined || "inorundefined");
console.log("" || "ifempty");
console.log(0 || "ifzero");
console.log(false || "iffalse");
console.log(NaN || "ifnan");
console.log("something" || "notsomething");

// optional chaining
console.log("Optional Chaining");
const obj = {
  a: {
    b: {
      c: 42,
    },
  },
};

console.log(obj?.a?.b?.c);
console.log(obj?.a?.b?.d);
console.log(obj?.a?.b);
console.log(obj?.a);
console.log(obj?.b);
console.log(obj?.c);

console.log("Arrays");
const arr = [1, 2, 3, 4, 5];

console.log("isArray:", Array.isArray(arr));
console.log("isPrototypeOf:", Array.prototype.isPrototypeOf(arr));
console.log("from:", Array.from(arr));
console.log("of:", Array.of(arr));
// Array.prototype is used to add new properties and methods to arrays
// Example: Adding a custom method to all arrays
Array.prototype.customSum = function () {
  return this.reduce((a, b) => a + b, 0);
};
const numbers = [1, 2, 3, 4];
console.log(numbers.customSum()); // 10

// Array.from() creates a new array from array-like/iterable objects
// Useful for converting other types to arrays
console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']
console.log(Array.from(new Set([1, 2, 3]))); // [1, 2, 3]
console.log(Array.from({ length: 3 }, (_, i) => i + 1)); // [1, 2, 3]

// Array.of() creates a new Array with variable number of arguments
// Useful when you want to create array with specific elements
console.log(Array.of(1)); // [1]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of("a", "b", "c")); // ['a', 'b', 'c']
console.log(Array.of()); // []
console.log(Array.of("hello")); // ['hello']
console.log(Array.of("hello", "Dilli", 67, true)); // ['hello', 'Dilli', 67, true]
const a = "something";
const c = a.split("");
const b = a;
console.log(Array.of(a)); // ['something']
console.log(b); // 'something'
console.log(Array.of(c)); // [['s', 'o', 'm', 'e', 't', 'h', 'i', 'n', 'g']]
console.log(Array.from(b)); // ['s', 'o', 'm', 'e', 't', 'h', 'i', 'n', 'g']

if ([]) {
  console.log(" empty array 👍");
}

if ([] === true) {
  console.log("👍");
} else {
  console.log("👎");
}

const arr1 = [10, 20, 30, [3, 45, [4, 5, 61, 7]], [34, [343], 34]];

// Method 1: Using flat() - Flattens nested array structure
// flat() accepts depth parameter to control levels of flattening
console.log(arr1.flat()); // Flattens 1 level deep
console.log(arr1.flat(2)); // Flattens 2 levels deep
console.log(arr1.flat(3)); // Flattens 3 levels deep

// Method 2: Using reduce() with concat()
console.log(arr1.reduce((acc, val) => acc.concat(val), [])); // [10, 20, 30, 3, 45, [4, 5, 61, 7], 34, [343], 34]

// Method 3: Using flatMap()
console.log(arr1.flatMap((x) => (Array.isArray(x) ? x : [x]))); // [10, 20, 30, 3, 45, [4, 5, 61, 7], 34, [343], 34]

// Method 4: Using toString() and split()
console.log(arr1.toString().split(",").map(Number)); // [10, 20, 30, 3, 45, 4, 5, 61, 7, 34, 343, 34]

// Method 5: Using recursion
function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
    );
  }, []);
}
console.log(flattenArray(arr1)); // [10, 20, 30, 3, 45, 4, 5, 61, 7, 34, 343, 34]

// Method 6: Using Stack
function flattenStack(arr) {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.unshift(next);
    }
  }
  return result;
}
console.log(flattenStack(arr1)); // [10, 20, 30, 3, 45, 4, 5, 61, 7, 34, 343, 34]

let count = 100;

console.log(20 % count);
