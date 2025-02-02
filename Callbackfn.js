// A callback function in JavaScript is a function that is passed as an argument to another function and is executed or called back at a later time, typically after some asynchronous operation completes or when a certain condition is met. 

// Passing a Function as an Argument: In JavaScript, functions are first-class citizens, which means they can be treated like any other data type, such as strings or numbers. Therefore, you can pass functions as arguments to other functions.

//"Callback functions in JavaScript are commonly used to handle the result of asynchronous operations. They allow you to define what should happen after an asynchronous task, like an API call or timer, completes. However, callbacks don’t inherently make JavaScript asynchronous; asynchronous behavior comes from APIs provided by the environment (like browsers or Node.js), which execute tasks outside the main thread and use callbacks to return the results." 

// 1. Synchronous Callback Example:
// function greet(name, callback) {
//   console.log("Hello, " + name + "!");
//   callback();  // Calling the callback function
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);


// 2. Asynchronous Callback Example (Using setTimeout):
// function fetchData(callback) {
//   console.log("Fetching data...");

//   setTimeout(function() {
//     console.log("Data fetched successfully!");
//     callback();  // Calling the callback after data is fetched
//   }, 2000);  // Simulates a 2-second delay
// }

// function processData() {
//   console.log("Processing data...");
// }

// fetchData(processData);





setTimeout(function(){
    console.log('Timer');
},5000); 



//Event
document.getElementById("Clickme")
.addEventListener('click', function xyz(){
    console.log('button clicked');
})


//Callback Hell
// Callback hell, also known as "pyramid of doom" or "callback spaghetti," refers to the situation in JavaScript where deeply nested callback functions make the code difficult to read, understand, and maintain. It commonly occurs when dealing with asynchronous operations that depend on each other or have multiple asynchronous tasks to be executed sequentially.
// One way to resolve callback hell is by using promises or async/await syntax, which provides a more readable and manageable way to handle asynchronous operations.


//Example1 - With Promise
getData(function (data) {
    getMoreData(data, function (moreData) {
      getEvenMoreData(moreData, function (evenMoreData) {
        doSomethingWithData(evenMoreData);
      });
    });
  });

//For example, using promises, the above code can be rewritten as:

getData()
  .then(function (data) {
    return getMoreData(data);
  })
  .then(function (moreData) {
    return getEvenMoreData(moreData);
  })
  .then(function (evenMoreData) {
    doSomethingWithData(evenMoreData);
  });


  //Example2 - With Promise
const cart = ['Shoes', "Belt", "Pants"]

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet(function(){

            })
        })
    })
})

// Chain promises
createOrder(cart)
  .then(() => proceedToPayment())
  .then(() => showOrderSummary())
  .then(() => updateWallet())
  .catch((error) => {
    // Handle errors
    console.error('Error:', error);
  });


//Example 3 - With Async Await 
async function processOrder(cart) {
  try {
    await createOrder(cart);
    await proceedToPayment();
    await showOrderSummary();
    await updateWallet();
  } 
  catch (error) {
    console.error('Error:', error);
  }
}
processOrder(cart);





//Inversion of Control 
// Control hamare pass nii rehta ek function p rehta hai jispr dusra function depend krta hai 
// Traditional Approach: Your code controls everything, from managing dependencies to deciding when to execute functions.
// IoC Approach: You delegate control to an external entity, like a framework or library. It decides when to execute certain functions, how to handle dependencies, and other aspects of your code's execution.

// Inversion of Control (IoC) is a design principle that refers to the inversion of the flow of control in a software application. Traditionally, in imperative programming, the flow of control is determined by the application itself. However, in IoC, the flow of control is inverted or delegated to an external framework or container. This means that instead of the application controlling the flow of execution, the framework or container controls it, often by using techniques such as dependency injection or callbacks.

 //Benefits 
//  Decoupling and Modularization-IoC helps separate the concerns in your code, making different parts of your application less dependent on each other.
// Flexibility and Reusability
// Improved Code Readability
// Dependency Management- IoC frameworks can automatically handle dependencies between components. This ensures that each component gets the necessary dependencies without having to manually manage them, reducing the risk of errors.
// Scalability