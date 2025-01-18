// The setTimeout function is a JavaScript function that allows you to schedule the execution of a function or code block after a specified number of milliseconds. This can be useful for implementing time-based logic in your code, such as delays, timeouts, and intervals.

// The setTimeout function takes two arguments: the function or code block to be executed, and the number of milliseconds to wait before executing it.

//SetTimeOut
function ayush() {
  console.log("Luv");
}
setTimeout(ayush, 10000);

// or;

setTimeout(function ayush() {
  console.log("SetTimeOut");
}, 4000);

// //ClearTimeOut
// // Reference dete hai upar wale ka
// // The clearTimeout function is used to cancel a timer that was set using the setTimeout function. It takes a single argument, which is the ID of the timer that you want to cancel.This function is handy when you want to prevent a scheduled function (or a piece of code) from executing after it has been set to run after a certain delay.

// Define a function to be executed after a delay

let timeoutId = setTimeout(function () {
  console.log("Timeout executed!");
}, 2000);

// Later, to clear the timeout
clearTimeout(timeoutId);

// //SetInterval
// // Certainly! setInterval is a JavaScript function used to repeatedly execute a function (or a piece of code) at specified intervals. It's commonly used for tasks that need to be performed repeatedly, such as updating the time on a clock, polling for new data from a server, or creating animations.
// // Define a function to be executed at intervals
setInterval(function () {
  console.log("Every 5 second");
}, 5000);

// or

// function printTime() {
//     const date = new Date();
//     console.log("Current time:", date.toLocaleTimeString());
//   }

//   // Schedule the function to run every second (1000 milliseconds)
//   const intervalId = setInterval(printTime, 1000);

// //   In this example, the printTime function is scheduled to run every second (1000 milliseconds) using setInterval. The setInterval function takes two arguments: the function to be executed (printTime in this case) and the interval in milliseconds between each execution.

// // The printTime function simply logs the current time to the console using console.log along with Date methods. Since setInterval is used, this function will be executed every second, continuously updating the console with the current time until stopped.

// //ClearInterval
// // The clearInterval function is used to stop the execution of a function or code block that was scheduled using the setInterval function. It takes a single argument, which is the ID of the timer that you want to stop.

// // The setInterval function returns a unique ID for the timer, which is passed to the clearInterval function to stop the timer. This allows you to control the timing of your code and implement time-based logic.

// // Define a function to be executed at intervals
function printMessage() {
  console.log("This message will be printed repeatedly.");
}

// Schedule the function to run every 2 seconds (2000 milliseconds)
const Ayush = setInterval(printMessage, 2000);

// Later, when you want to stop the interval:
clearInterval(Ayush);

// or
// // Stop the interval after 5 seconds (5000 milliseconds)
setTimeout(function () {
  clearInterval(intervalId); // Clear the interval using its ID
  console.log("Interval stopped after 5 seconds.");
}, 5000);

// Trust Issue with setTimeout

// console.log(Start);

// setTimeout(function name() {
//   console.log(Callback);
// }, 5000);

// console.log(end);

// Millions line of code that take 10sec to complete


// Output 
// Start
// end 
// Million lines of code 10 sec tak callstack busy but uske phle setTimeout k 5sec complete hogye but usko rukna pdga 10 sec tk );