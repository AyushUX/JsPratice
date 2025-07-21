// Reduce 
// The reduce method in JavaScript is a powerful array function that allows you to transform an array into a single value by applying a function to each element of the array. that value could be:

// a number (sum, total)
// a string (concatenation)
// an object (grouping or merging)
// another array (flattening)

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

// 1. Total Cart Price
const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 500 },
  { item: "Bag", price: 2000 },
];

const total = cart.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue.price
} ,0)
console.log(total);

// OR 
// const total = cart.reduce((acc, item) => acc + item.price, 0);

// 2. Flattening an Array of Arrays

const nestedArray = [[1, 2], [3, 4], [5]];
const flattend= nestedArray.reduce((accumulator, currentValue)=>{
    return accumulator.concat(currentValue)
},[])
console.log(flattened); 

// This won’t work for deeply nested arrays:
// we can use flat in those scenarios

const deeplyNested = [[1, [2, 3]], [4, [5, [6]]]];
const fullyFlattened = deeplyNested.flat(Infinity);
console.log(fullyFlattened); // [1, 2, 3, 4, 5, 6]

// 3.Counting Instances of Values

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange'];
const count = fruits.reduce((acc,fruit)=>{
    acc[fruit]=(acc[fruit]|| 0)+1 ;
    return acc;
},{})
console.log(count);

// 4.Finding Maximum or Minimum Values

const numbersu = [5, 1, 8, 3, 2];
const max= numbersu.reduce((acc,curr)=>(curr>acc?curr:acc),number[0])
console.log(max);

// 5. Calculating Averages
const scores = [90, 80, 70, 85];
const average = scores.reduce((acc, curr, index, array) => acc + curr / array.length, 0);
console.log(average); // Output: 81.25


// Filter
// The filter() method is used to create a new array containing only those elements that pass a specific condition (i.e., return true from the callback function).

// 1. Data Validation
const data = [1, null, 2, undefined, 3];
const validData = data.filter(item => item !== null && item !== undefined);
Output: [1, 2, 3]

// 2.User Input Filtering
const items = ['apple', 'banana', 'cherry', 'date'];
const searchTerm = 'a';
const filteredItems = items.filter(item => item.includes(searchTerm));
Output: ['apple', 'banana', 'date']

// 3.Removing Duplicates: 
// You can use filter in combination with other methods to remove duplicates from an array.

// 4.Conditional Rendering: 
// In frameworks like React, you can filter arrays of components based on certain conditions before rendering them.

const users = [{name: 'Alice', active: true}, {name: 'Bob', active: false}];
const activeUsers = users.filter(user => user.active);
// Output: [{name: 'Alice', active: true}]

// 5.Filtering even/odd numbers
const odds = numbers.filter(num => num % 2 !== 0);
