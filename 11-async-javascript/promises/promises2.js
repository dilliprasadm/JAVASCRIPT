function getWeather() {
  return new Promise(function (resolve, reject) {
    // resolve("Sun");
    reject("sunny");
  });
}

const promise = getWeather();
console.log(promise);

// promise
//   .then(function (data) {
//     console.log("data:", data);
//   })
//   .catch(function (Error) {
//     console.log("Error:", Error);
//   });

// promise
//   .then(
//     function (data) {
//       console.log(data);
//     },
//     function (data) {
//       console.log(`It is ${data}`);
//     } // here it will take second parameter as catch block. it will not go to catch block.
//   )
//   .catch(function (err) {
//     console.error("err",err);
//   });

function onSuccess(data) {
  console.log("Success", data);
}

function onError(err) {
  console.log("ErrorFunction", err);
}
// promise.then(onSuccess).catch(onError); // we can pass functions like these
// promise
//   .then(onSuccess, onError)
//   .catch(onError)  // here again like above catch will not execute, in .then onError is considered as error

// check here from which line onError is called

promise
  .then(onSuccess, (err) => {
    console.log("error from .then", err);
  })
  .catch((err) => {
    console.log("error form .catch", err);
  });

// Promise { <rejected> 'sunny' } error from .then sunny
// here catch block is not exectued because in .then we are handling error call back means it will call errorcallback so promise was resolved, so catch block was not executed.
// .then(success, error)
//  Promise rejected
//    ↓
// error callback runs
//    ↓
// Promise becomes resolved
//    ↓
// .catch() ❌ skipped
// Why not recommended?
// .catch() becomes useless
// Breaks error propagation
// Makes debugging harder

// better use catch instead of handaling error in .then`
// .then(success).catch(error)
// Promise rejected
//    ↓
// .then() skipped
//    ↓
// .catch() runs

// ⭐one line rule - Never pass the error handler as the second argument to .then() in application code. Always use .catch() instead.

// promise
// .then(onSuccess)
// .catch(onError);

// // or

// promise
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


