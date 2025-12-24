heading = document.createElement("h1");
heading.textContent = "This is JAVASCRIPT PRACTICE";
heading.id = "heading";
document.body.appendChild(heading);
document.getElementById("heading").style.color = "red";

for (var i = 0; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// What actually happens:
// The loop runs immediately.
// i becomes 0 → 1 → 2 → 3 → 4.

// All the setTimeout callbacks are scheduled.

// After the loop finishes, the event loop runs the callbacks.

// By that time, i is already 4.

// So every callback prints the same final value.

for (let j = 0; j <= 3; j++) {
  setTimeout(() => console.log(j), 1000);
} // output: 0 1 2 3

// What actually happens:
// Each iteration of the loop creates a new binding for j.
// The setTimeout callbacks close over these separate bindings.
// When the callbacks execute, they each reference their own j value.

for (var k = 0; k <= 3; k++) {
  ((k) => {
    setTimeout(() => console.log(k), 1000);
  })(k);
} // output: 0 1 2 3
