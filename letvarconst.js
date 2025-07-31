// Var: This is the oldest way to declare a variable in JavaScript. Variables declared with var are function scoped, meaning they are only accessible within the function they are declared in. If you declare a variable with var in the global scope, it becomes a global variable. var variables can also be re-declared and updated within the same scope.

// var variables are hoisted to the top of their function or global scope, which means you can access them before they are declared.
// console.log(a);
// var a=10;
// Result line 4 p undefined aayga 

// When you declare a variable using var, it is hoisted to the top of its scope (function or global scope).
// However, only the declaration is hoisted, not the initialization. ❌ Initialization (value assign karna) hoist nahi hota.- imp

// The above code is effectively treated like this by the JavaScript engine:

// var a;       // Declaration is hoisted
// console.log(a); // `a` exists but is undefined
// a = 10;      // Initialization happens here

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
// var is function-scoped, block-scoped nahi.
// Iska matlab: poore example() function ke andar ek hi x variable exist karta hai. - Imp
// Jab tu if (true) block mein var x = 20; likhta hai, wo same outer x = 10 ko overwrite kar deta hai.- imp



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

// let a = 5;        // This line declares a variable `a` using the `let` keyword and initializes it with the value 5.
// a = 10;           // This line reassigns the value of `a` to 10.
// console.log(a);   // This line outputs the current value of `a` to the console, which will be 10.



// const: This keyword was also introduced in ECMAScript 6 (ES6) to address some of the issues with var. Variables declared with const are block scoped, just like let. However, const variables cannot be updated or re-declared within the same block. This means that the value of a const variable is constant and cannot be changed. 
//  However, if the const variable is an object, you can still modify the properties of that object.

//Const
// function example() {
//     const x = 1;
//     if (true) {
//       const x = 2; // re-declares x, but cannot update it
//       console.log(x); // 2
//     }
//     console.log(x); // 1
//   }
// Re-declaration: Since the inner and outer x are in different scopes, there's no conflict or error in re-declaring x with const in the inner block.
 
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
//   undefined error 
  
// console.log(b);
// let b = 10;
// ReferenceError: Cannot access 'b' before initialization
// Because let and const are hoisted but not initialized — they go into the Temporal Dead Zone (TDZ), where accessing them before the actual line of declaration causes a ReferenceError.



// or 
// console.log(x);
// reference error 
// ReferenceError: x is not defined


// TDZ = Temporal Dead Zone

// Yeh ek aisi zone hoti hai jisme:
// Variable declare toh ho chuka hota hai (JavaScript ne hoist kar diya hota hai),
// Lekin tu usse access nahi kar sakta jab tak uski line tak nahi pahunchta.
// Agar tu use karne ki koshish karega — ❌ ReferenceError aayega.

console.log(a); // ❌ ReferenceError
let a = 10;

// Jab JS engine code read karta hai, to:
// let a ko hoist karta hai — lekin uski initialization nahi karta.
// TDZ start hoti hai from top of scope (ya block) till let a = 10 line.
// Jab tu console.log(a) karta hai uss zone ke andar, JS kehta hai:
// “Bhai, a exist toh karta hai, lekin abhi accessible nahi hai — wait kar.”

// What Happens Internally?
// let a; hoist ho gaya
// "a" locked hai TDZ mein until this line is executed.
// Jaise hi let a = 10; execute hota hai — TDZ khatam, ab access allowed.
