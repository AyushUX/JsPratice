 //Push
// let Arr = [1,2,3,4,5]
// Arr.push(80)
// console.log(Arr);


// //Pop
// let Arr1 = [11,22,33,44,55,200]
// Arr1.pop()
// console.log(Arr1);
 

// //Shift 
// let Arr2 = [111,222,333,444,555]
// Arr2.shift()
// console.log(Arr2);

// //unshift
// let Arr3 = [111,222,333,444,555]
// Arr3.unshift(211)
// console.log(Arr3);

// //Slice - Index of 2 and 3 (last wala included nii rehta hai) 
// //selects from a given start, up to a (not inclusive) given end

// const fruits = ['apple', 'banana', 'mango', 'grape', 'apple', 'luv']
// const fruit = fruits.slice(2,5)
// console.log(fruit);

// //Splice
// const fruits1 = ['apple', 'banana', 'mango', 'grape', 'apple']
// const fruit1 = fruits1.splice(1,4)
// console.log(fruit1);

// //Flat
const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
const flattenArray = arr.flat(3);
console.log(flattenArray);
Output: [1, 2, 3, 4, 5, 6, 7, 8]


// //Indexof
// const fruits2 = ['apple', 'banana', 'mango', 'grape', 'apple']
// const fruit2 = fruits2.indexOf('mango')
// console.log(fruit2); 


// //lastIndexOf
// const frui = ['apple', 'banana', 'mango', 'grape', 'orange', 'mango'];
// const index = frui.lastIndexOf('mango');
// console.log(index); // Output: 5

// //Length
// const fruits3 = ['apple', 'banana', 'mango', 'grape', 'apple']
// const fruit3 = fruits3.length
// console.log(fruit3);

// //tostring
// const fruits4 = ['apple', 'banana', 'mango', 'grape', 'apple'];
// console.log(fru its4.toString());
// Output: "apple,banana,mango,grape,apple"


// //forEach
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//   console.log(num ber);
// });

//Concat
// let arr1 = [1, 2];
// let arr2 = [3, 4]; 
// let result = arr1.concat(arr2);
// console.log(result);


// Reverse
// let arr = [1, 2, 3];
// arr.reverse(); // [3, 2, 1]

// Sort
// let arr = [3, 1, 4, 2];
// arr.sort(); // [1, 2, 3, 4]
 


// Mutating Array Methods (modify the original array):

// push(): Adds one or more elements to the end of an array.
// pop(): Removes the last element from an array.
// shift(): Removes the first element from an array.
// unshift(): Adds one or more elements to the beginning of an array.
// splice(): Changes the contents of an array by removing, replacing, or adding elements at a specific index. 
// reverse(): Reverses the order of elements in an array.
// sort(): Sorts the elements in an array, optionally using a comparison function.


// Non-Mutating Array Methods (return a new array):

// concat(): Merges two or more arrays and returns a new array.
// slice(): Returns a shallow copy of a portion of an array into a new array.
// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
// reduce(): Reduces an array to a single value by applying a callback function to each element.
// forEach(): Executes a provided function once for each array element.
// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate. 