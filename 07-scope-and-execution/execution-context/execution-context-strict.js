"use strict";
// console.log(first); // ReferenceError: first is not defined

// ---------------------------------------------------------------

// console.log(second);  // ReferenceError: second is not defined
// second = 10;  // ReferenceError: second is not defined
// console.log(second); // ReferenceError: second is not defined
// ---------------------------------------------------------------

// console.log(third); // undefined
// var third = 10;
// console.log(third); // 10
// ---------------------------------------------------------------

// var fourth = 20;
// function foruth(){
//   return 30;
// }
// console.log(fourth); // 20
// ---------------------------------------------------------------


// var fifth = 20;
// function fifth(){
//   return 30;
// }
// console.log(fifth); // 20
// fifth(); // TypeError: fifth is not a function
// ---------------------------------------------------------------



// function sixth(){
//   return 30;
// }
// console.log(sixth); // [Function: sixth]

// function seventh(){
//   return console.log(30);
// }
// console.log(seventh); // [Function: seventh]
// console.log(seventh()); // 30 undefined

// function eight(){
//   return 30;
// }
// console.log(eight); // [Function: eight]
// console.log(eight()); // 30 
// ---------------------------------------------------------------


// function nine(){
//   return 40;
// };

// var nine = 50;
// // console.log(nine, nine()); // TypeError: nine is not a function
// console.log(nine); // 50
// console.log(typeof nine); // number
// console.log(nine()); // TypeError: nine is not a function
// ---------------------------------------------------------------


// var ten = 0;
// function ten(){
//   return 10;
// }
// var ten = 20;
// console.log(ten); // 20
// ten =30;
// console.log(ten); // 30

// let eleven = 0;
// function eleven(){ // SyntaxError: Identifier 'eleven' has already been declared
//   return 10;
// }
// console.log(eleven); 

// function twelve(){
//   return 50;
// };
// console.log(twelve()); // 50
// var twelve = 60;
// console.log(twelve); // 60
// console.log(twelve()); // TypeError: twelve is not a function

function thirtheen(){
  return 50;
};
// console.log(thirtheen()); // no output
// let thirtheen = 60; // SyntaxError: Identifier 'thirtheen' has already been declared

// console.log(thirtheen()); // 50
// thirtheen = 70; 
// // console.log(thirtheen()); // TypeError: thirtheen is not a function
// console.log(thirtheen); // 70

