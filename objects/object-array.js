// input obj = {a:1, b: "Dilli"}
// output arr = [["a",1], ["b", "Dilli"]]

// For this there is an built in way we can achieve it
const obj = {a:1, b: "Dilli", c:true}
const arr = Object.entries(obj);
console.log(arr);


// Custom way
const arr2 = [];
for(let key in obj){
  arr2.push([key, obj[key]])
}
console.log(arr2);

// using for of loop
const arr3 = [];
for(let key of Object.keys(obj)){
  arr3.push([key, obj[key]]);
}
console.log(arr3);

// for(let key of obj){....} // for(let key of obj){ TypeError: obj is not iterable
// we can't directly iterate objects with for of loop like this for(let key of obj)
// because objects are not iterable in javascript.
// for...of requires an iterable(like arrays, SVGStringList, or iterables). Objects don't implement the iterable protocol.


