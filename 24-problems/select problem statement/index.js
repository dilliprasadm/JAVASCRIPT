console.log("First");

setTimeout(() => {
  console.log("Second");
}, 30000);

console.log("Third");

setTimeout(() => {
  console.log("Fourth");
}, 1000);

setTimeout(() => {
  console.log("fifth");
}, 0);

for (let i = 0; i < 10; i++) {
  console.log(i)
}

setTimeout(() => {
  console.log("sixth");
}, 0);
