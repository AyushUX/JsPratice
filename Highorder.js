// In JavaScript, a higher-order function is a function that can take other functions as arguments or return functions as results. This concept enables powerful and flexible programming paradigms like functional programming. Higher-order functions provide a way to abstract over actions, not just values.

// Here's a breakdown of higher-order functions:

// Taking Functions as Arguments:
// Higher-order functions can accept other functions as arguments. This allows for behaviors or operations to be passed as parameters, making the function more flexible and reusable.
// Returning Functions as Results:
// Higher-order functions can also generate and return new functions as their result. This allows for the creation of functions dynamically based on certain conditions or parameters.

// Higher-order functions are widely used in JavaScript and are an essential part of many programming patterns, including callback functions, event handling, promises, and functional programming concepts like map, filter, reduce, etc.

// Here are some examples of higher-order functions in JavaScript:

// Array.prototype.map(): This method takes a function as an argument and applies it to each element in an array, returning a new array with the results.

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function (num) {
  return num * num;
});
console.log(squares); // [1, 4, 9, 16, 25]

// Array.prototype.filter(): This method takes a function as an argument and returns a new array containing only the elements that pass a test implemented by the function.

const numbers1 = [1, 2, 3, 4, 5];
const evens = numbers1.filter(function (num) {
  return num % 2 === 0;
});
console.log(evens); // [2, 4]

// Array.prototype.reduce(): This method takes a function as an argument and applies it to each element in an array, returning a single value.

const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 15

// setTimeout(): This function takes a function as an argument and returns a timer that will execute the function after a specified delay.

setTimeout(function () {
  console.log("Hello, world!");
}, 1000);

//Event listener
const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});
