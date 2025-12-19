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

let x = 10;
function test() {
  console.log("test", x);
  x = 20;
}
test();
// Why here the test is test 10