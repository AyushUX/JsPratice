 // In JavaScript, currying is a technique used to transform a function with multiple arguments into a sequence of nested functions, each taking a single argument. It allows you to create new functions by partially applying the original function's arguments.

function add(a,b,c) {
    return x + y+c;
  }
  
  console.log(add(3, 5, 8)); 

//   Now, let's curry this function:
// Curried function

function add(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      }
    }
  }
  
  console.log(add(1)(2)(3)); // 6

//In this code, the sum function takes one argument a and returns a new function that takes one argument b. The returned function takes one argument c and adds it to the a and b arguments, returning the result.

// console.log(curriedSum(1, 2, 3)); // 6
// console.log(curriedSum(1)(2, 3)); // 6
// console.log(curriedSum(1)(2)(3)); // 6

//You can also curry a function with more than two arguments, like this:



// Currying becomes particularly useful when you want to create specialized versions of a function with certain arguments pre-set, which can be helpful in scenarios like event handling, data transformation pipelines, or creating utility functions.

// Curried function to calculate the volume of a rectangular prism
function volume(length) {
  return function(width) {
      return function(height) {
          return length * width * height;
      };
  };
}

// Partially applying arguments
const calculateVolume = volume(5)(4);
console.log(calculateVolume(3)); // Output: 60

// When we call calculateVolume(3), we're providing the height argument, which completes the function chain and calculates the volume using the previously set length and width values (5 and 4, respectively), along with the new height value of 3.