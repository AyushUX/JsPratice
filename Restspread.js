// 1. Spread Operator (...)
// The spread operator is used to expand (spread) elements of an array or object into individual elements.

// Use Cases 
// 1. Copy an array
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1]; // Creates a shallow copy of arr1
// console.log(arr2); // Output: [1, 2, 3]

// 2. Merging Arrays
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let merged = [...arr1, ...arr2];
// console.log(merged); // Output: [1, 2, 3, 4, 5, 6]

// 3. Spreading Objects (Shallow Copy)
// let obj1 = { a: 1, b: 2 };
// let obj2 = { ...obj1, c: 3 };
// console.log(obj2); // Output: { a: 1, b: 2, c: 3 }

// 4. Passing Arguments to Functions
// function sum(x, y, z) {
//     return x + y + z;
// }

// let numbers = [1, 2, 3];
// console.log(sum(...numbers)); // Output: 6




// Rest Parameters(...)
// Function Parameters: Collects all remaining arguments into an array.
// function sum(...args) {
//     return args.reduce((acc, curr) => acc + curr);
// }
// console.log(sum(1, 2, 3)); // Output: 6

// Array Destructuring: Collects the rest of the elements into a new array.
// let [x, ...y] = [1, 2, 3, 4, 5];
// console.log(x); // Output: 1
// console.log(y); // Output: [2, 3, 4, 5]

// Object Destructuring: Collects the rest of the properties into a new object.
// let { a, b, ...c } = { a: 1, b: 2, c: 3, d: 4 };
// console.log(a); // Output: 1
// console.log(b); // Output: 2
// console.log(c); // Output: { c: 3, d: 4 }