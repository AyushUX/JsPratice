// A callback function in JavaScript is a function that is passed as an argument to another function and is executed or called back at a later time, typically after some asynchronous operation completes or when a certain condition is met. 

// Passing a Function as an Argument: In JavaScript, functions are first-class citizens, which means they can be treated like any other data type, such as strings or numbers. Therefore, you can pass functions as arguments to other functions.

//"Callback functions in JavaScript are commonly used to handle the result of asynchronous operations. They allow you to define what should happen after an asynchronous task, like an API call or timer, completes. However, callbacks don’t inherently make JavaScript asynchronous; asynchronous behavior comes from APIs provided by the environment (like browsers or Node.js), which execute tasks outside the main thread and use callbacks to return the results." 

// Example 1
function message() {
  console.log("This message is shown after 3 seconds");
}
setTimeout(message, 3000);


//Example 2 Another example is event handling
document.getElementById("Clickme")
.addEventListener('click', function xyz(){
    console.log('button clicked');
})

// Example 3 with promise 

const cart = ['Shoes', "Belt", "Pants"]

// You are calling a function named createOrder from a system called api.
api.createOrder(cart, function(){
  api.proceedToPayment(function(){
    api.showOrderSummary(function(){
      api.updateWallet(function(){

      })
    })
  })
})

// This is callback hell or pyramid of doom
// we can solve this using Promise

const cart = ['Shoes', "Belt", "Pants"]

api.createOrder(cart)
.then(()=>api.proceedToPayment())
.then(()=>api.showOrderSummary())
.then(()=>updateWallet())
.catch((error)=>{console.log(error);}
)

// we can also resolve this using async await

async function processOrder(cart) {
  try {
    await api.createOrder(cart);
    await api.proceedToPayment();
    await api.showOrderSummary();
    await api.updateWallet();
  } catch (error) {
    console.error("Error processing order:", error);
  }
}
const cart = ['Shoes', "Belt", "Pants"];
processOrder(cart);

// Example 3

getData(function (data) {
  getMoredata(data, function (moreData) {
    getEvenMoreData(moreData, function (evenMoreData) {
      doSomethindWithData(evenMoreData)
    })
  })
})

// then promise

getData()
.then(data=> getMoredata(data))
.then(moreData=> getEvenMoreData(moreData))
.then(evenMoreData=>doSomethingWithData(evenMoreData))
.catch(error=>console.error(error))


// with Promise

async function processData(){
  try {
    const data = await getData();
    const moreData = await getMoredata(data);
    const evenMoreData= await getEvenMoreData(moreData)
    doSomethindWithData(evenMoreData)
  } catch (error) {
    console.log(error);
  }
}

// Example 4 with synchronous callback

function greet(name, callback){
  console.log('hello !{name}');
  callback()
}

function sayGoodbye(){
  console.log("goodbye");
}

greet("Ayush", sayGoodbye)

// Example 5 Asynchronous Callback Example (Using setTimeout)
// You're simulating a real-world situation where something takes time (like getting data from a server) — and once it's done, you run another function.


function fetchData(callback) {
  console.log("Fetching data...");
// It takes one input: a callback function (something to run later).
// It immediately prints: "Fetching data...".

  setTimeout(function(){
    console.log("Data fetched");
    callback(); // Calling the callback after data is fetched
  },2000)
}

// That function:
// Prints: "Data fetched successfully!"
// Then calls the callback you passed in (this will be processData later).
function processData() {
  console.log("Processing data...");
}
// This is what we will run after the data is fetched.
fetchData(processData);

// Output
// Fetching data...
// ... (waits 2 seconds) ...
// Data fetched successfully!
// Processing data...

// Start fetching... wait... then process.
