// Var: This is the oldest way to declare a variable in JavaScript. Variables declared with var are function scoped, meaning they are only accessible within the function they are declared in. If you declare a variable with var in the global scope, it becomes a global variable. var variables can also be re-declared and updated within the same scope.

// var variables are hoisted to the top of their function or global scope, which means you can access them before they are declared.
// console.log(a);
// var a=10;
// Result line 4 p undefined aayga 

// You can redeclare and update var variables within the same scope.

//Var
// function example() {
//     var x = 10;
//     if (true) {
//         var x = 20;
//         console.log(x); // Outputs: 20
//     }
//     console.log(x); // Outputs: 20
// }

// Functional scope hota hai bole to function k andar variable declare kiya hai to bahar access naii krskte hai 
// aur Global scope bhi ki function k bahar varibale declare kiya hai to function k anadar aaccess krskte hai 



// let: This keyword was introduced in ECMAScript 6 (ES6) to address some of the issues with var. Variables declared with let are block scoped, meaning they are only accessible within the block they are declared in (i.e., between {}). let variables can be updated within the same block, but they cannot be re-declared within the same block.

// Variables declared with let are block-scoped, meaning they are only visible within the block ({ }) in which they are declared.
// let variables are not hoisted to the top of their block, so you cannot access them before they are declared. they are hoisted but in temporal dead zone 
// You cannot redeclare a variable using let in the same scope, but you can update its value.

// Block Scope hota hai 

//Let
// function example() {
//     let x = 10; 
//     if (true) {
//         let x = 20;
//         console.log(x); // Outputs: 20
//     }
//     console.log(x); // Outputs: 10
// }


// Let a;
// a=10; 
// console.log(a);
// Ye krskte hai but const k case m esa naii krskte hai 

// let a=5;
// a=10;
// console.log(a); ye bhi sahi hai kuki redeclare naii krskte hai 

let a = 5;        // This line declares a variable `a` using the `let` keyword and initializes it with the value 5.
a = 10;           // This line reassigns the value of `a` to 10.
console.log(a);   // This line outputs the current value of `a` to the console, which will be 10.



// const: This keyword was also introduced in ECMAScript 6 (ES6) to address some of the issues with var. Variables declared with const are block scoped, just like let. However, const variables cannot be updated or re-declared within the same block. This means that the value of a const variable is constant and cannot be changed. However, if the const variable is an object, you can still modify the properties of that object.

//Const
function example() {
    const x = 1;
    if (true) {
      const x = 2; // re-declares x, but cannot update it
      console.log(x); // 2
    }
    console.log(x); // 1
  }
Re-declaration: Since the inner and outer x are in different scopes, there's no conflict or error in re-declaring x with const in the inner block.
 
//   const b=100;
//   b=1000;
//   console.log(b);
//   Type error aayga kuki const type ka hai usko change naii krskte hai 

// const b;
// b=100;
// console.log(b);
// Syntax error dega kuki syntax mirror hai equal to aur uski value 

//   console.log(a);
//   var a=100;
//   Reference error 
  
// or 
// console.log(x);
// reference error 



