//Scope 
// Type 1 Block Scope
// function scopes(){
//     const a = 'hello'
// }
// console.log(a);
// scopes()

// Type 2 Local scope
// function scopes(){
//     let names = 'Ayush'
//     console.log(names);
// }
// scopes();


// Type 3 Global scope

// let names = 'Ayush'
// function scopes(){
//     console.log(names);
// }
// scopes();

// Question
// function parent(){
//     var x=1;
//     console.log(x);
//     function child(){
//         console.log(x);
//     }
//     child()
// }
// parent()
// output 
// 1
// 1



// function parent(){
//     var x=1;
//     console.log(x);
//     function child(){
//         var x=2;
//         console.log(x);
//     }
//     child()
// }
// parent()
// output 
// 1
// 2


// var x=10;
// {
//     var x=1;
//     console.log(x);   
// }
// output 1 Apn andar hi dkhga mil jyga to print kra dega 



// var x=10;
// {
//     var x=1;
//     console.log(x);   
// }
// console.log(x);
// Output 1 1 
// Inside the block { ... }, var x = 1; redeclares and assigns a new value to the x variable. Since var is not block-scoped, this redeclaration modifies the existing x variable in the global scope, changing its value to 1.

// let x=10;
// {
//     let x=1;
//     console.log(x);   
// }
// console.log(x);
// output 1 10


//Hoisting
// In Javascript, you can call a function before it is defined and you won’t get an error ‘Uncaught ReferenceError’. 
// The reason behind this is hoisting where the Javascript interpreter always moves the variables and function declaration to the top of the current scope (function scope or global scope) before the code execution.
 
//Function Hoisting
// hoistedFunction(); // Output: "This function has been hoisted"

// function hoistedFunction() {
//     console.log("This function has been hoisted");
// }

 
//Var Hoisting
// console.log(x); // Output: undefined
// var x = 5;
// console.log(x); // Output: 5

// Let and Const Hoisting
// Variables declared with let and const are also hoisted, but they are not initialized. They are placed in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered. Accessing them in the TDZ results in a ReferenceError.

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// console.log(y); // Output: 10
// In this example, the declaration of y is hoisted to the top of the block, but accessing y before its initialization results in an error.


// let a=10;
// console.log(a);
// var b=100;
// Even before a single line of code is executed, javascript has allocated the memory to a' and 'b'. which is undefined 

// Understanding the Temporal Dead Zone
// is the time since when this let varibale is hoited and till when it is initialized some value the time between them 
// console.log(a);
// let a=10;
// In dono upar wale line k beech k time difference ko khte hai. Jb tak wo tdz m rehte hai hum access naii krkste usko jb tk usko initilaise na krde ksii value s
// When the JavaScript engine parses your code, it hoists the declarations of variables (both let and const) to the top of their respective scope. However, unlike variables declared with var, variables declared with let and const are not initialized with undefined during the hoisting phase. They remain uninitialized until the execution reaches their declaration. This uninitialized state creates the TDZ


// console.log(x);
// Agr srf ye line likh dnge to check krnge console me to ReferenceError dega kuki x ko kabhi define hi naii kiya hai to uska koii reference naii hai 
// X is not defined dega 

// but agr 
// console.log(b);
// var b= 10;

// is case m Undefined error dega kuki memory allocation hogya hai B ka but initialise naii kiya hai b ko jokuki 74 line m hua 

// but but 
// console.log(a);
// let a= 10;
// Let s krte to undefined naii deta reference error deta kuki wo tdz mai hai aabhi 






//Clousure
// A closure is simply a function inside another function that has access to the outer function variable.
// The inner function (closure) can access the variable defined in its scope (variables defined between its curly brackets), in the scope of its parent function, and in the global variables.Now here you need to remember that the outer function can not have access to the inner function variable 

//Example1
// function parent(){
    
//     let a = 'Ayushi'
//     function child(){
//         console.log(a)
//     }
//     child()
// }
// parent()

//Example2
// function outerFunction() {
//     let outerVariable = 'I am outside!';

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction;
// }

// const closureFunction = outerFunction();
// closureFunction(); // Output: 'I am outside!'

//  


//IIFE (Immediately Invoked Function Expressions) 
// As the name suggests IIFE is a function in JavaScript which is immediately invoked and executed as soon as it is defined. Variables declared within the IIFE cannot be accessed by the outside world and this way you can avoid the global scope from getting polluted. So the primary reason to use IIFE is to immediately execute the code and obtain data privacy. 
//Code Structure
// (function ayush(){
//     console.log('IIFE Function');
// })()

