// Imagine you're solving a tricky puzzle, and you keep coming across the same questions over and over again. Instead of figuring out the answer from scratch every time, you jot down the answers as you find them. Then, when you encounter the same question again, you just check your notes for the answer.

// That's kind of like what memoization does in programming!

// In programming, memoization is a technique where you store the results of expensive function calls and return the cached result when the same inputs occur again. Instead of recalculating the result every time, you just fetch it from memory.

// Memoization is a technique in functional programming that allows you to store the results of expensive function calls and reuse them when the same inputs are provided again. This can improve the performance of your code by reducing the number of times that the function needs to be called.

// Let's say you have a function that calculates the factorial of a number:

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } 
    else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(5)); // Output: 120

//   This function works fine, but if you call factorial(5) multiple times, it will recalculate the factorial of 5 each time, even though the result is the same.

//   Now, let's apply memoization to this function:  

const memo = {};

function factorial(n) {
  //This condition checks if the input number n is 0 or 1. If so, it returns 1, as the factorial of 0 and 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  } 
  // This condition checks if the factorial of n has already been calculated and stored in the memo object.
  // If the result is found in memo, it returns the stored value directly, avoiding redundant computation.
  else if (memo[n] !== undefined) {
    return memo[n];
  } 
  else {
    // If the factorial of n is not found in memo, this line calculates it recursively by calling the factorial function for (n - 1).
    // It stores the result in memo[n] for future reference, to avoid recalculating it.
    memo[n] = n * factorial(n - 1);
    return memo[n];
  }
}

console.log(factorial(5)); // Output: 120

// In this version, we introduce a memo object to store the results. Before calculating the factorial, we check if the result for the given input n is already in the memo. If it is, we return the cached result. If not, we calculate the factorial as usual, store the result in the memo, and return it.

// So, the next time you call factorial(5), instead of recalculating it, the function just looks it up in the memo and returns the cached result. 
// This can significantly speed up the performance of your code, especially for functions with expensive computations or recursive calls.
