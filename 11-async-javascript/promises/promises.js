// Promises

//syntax
new Promise((resolve, rejecct) => {});

const p1 = new Promise((resolve, reject) => {
  resolve("Promise1 got resolved");
  reject("Promise1 got rejected");
});

const p2 = new Promise((resolve, reject) => {
  reject("Promise2 got rejected");
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise3 got resolved after 2 seconds");
  }, 2000);
});

const p4 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise4 got resolved after 10 second");
    // rej("Promise4 got rejected after 10 second");
  }, 10000);
});

const p5 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise5 got resolved after 1 seconds");
  }, 1000);
});

const pAllSettled = Promise.allSettled([p1, p2, p3]); // give status of all promises regardless of success or failure
const pAll = Promise.all([p1, p2, p3]); // give result only if all promises got resolved, even if one promise rejeected it will give error immediately without checking other promises
const pAny = Promise.any([p1, p2, p3]); // give result of any first resolved promise, regardless of other promises got rejected or resolved
const pRace = Promise.race([p1, p2, p3]); // give result of first settled promise, reagrdless of other promises got resolved or rejected.})

function handlePromise() {
  pAllSettled.then((res) => {
    console.log("pAllSettled:", res);
  });
  pAll.then((res) => {
    console.log("pAll:", res);
  });
  pAny.then((res) => {
    console.log("pAny:", res);
  });
  pRace
    .then((res) => {
      console.log("pRace:", res);
    })
    .catch((err) => {
      console.log(err);
      // console.error(err);
    });
}

handlePromise();

const p = Promise.allSettled([p3, p4, p5, p2]);
const promiseTime = p.then((res) => {
  console.log("p:", res);
});

console.log("promiseTime:", promiseTime);

// Promise Chaining
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched");
  }, 2000);
});

fetchData
  .then((res) => {
    console.log(res);
    return "Data processed";
  })
  .then((res) => {
    console.log(res);
    return "Data saved";
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
// In the above example, if any of the promises in the chain get rejected, the catch block will handle the error.
