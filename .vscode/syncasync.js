// Asynchronous Operation in JavaScript
// Asynchronous operations in JavaScript allow the program to execute non-blocking tasks, meaning it doesn't wait for one operation to complete before moving on to the next.
// How Does It Work?
// JavaScript is single-threaded (it can only execute one task at a time), but asynchronous operations help it handle time-consuming tasks (like API calls, file reading, or timers) without blocking other code execution.

// Examples of Asynchronous Operations:
// setTimeout() and setInterval() (Timers)
// Fetching data from an API (fetch(), XMLHttpRequest)
// Reading files (Node.js fs.readFile())
// Database queries (MongoDB, MySQL queries)
// Event Listeners (addEventListener())

// Give me the code snippet for Asynchronous Operation in JavaScript

// Synchronous (Blocking) Example:
// console.log("Start");

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("End");
// Here, each line executes in order without skipping anything.


// Asynchronous (Non-Blocking) Example:
// console.log("Start");

// setTimeout(() => {
//   console.log("Task completed!");
// }, 2000);

// console.log("End");
// setTimeout() executes after 2 seconds, but JavaScript doesn't wait for it. Instead, it moves on and prints "End" immediately.

// JavaScript uses the Event Loop and Callback Queue to manage asynchronous operations. When an async operation (like setTimeout()) finishes, it gets added to the callback queue, and the event loop executes it once the main thread is free.

