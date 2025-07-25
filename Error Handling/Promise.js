// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Creating a Promise
// Use the Promise constructor which takes an executor function with two callbacks: resolve and reject.

const myPromise= new Promise((resolve,reject)=>{
      // some asynchronous operation
    let success = true;
    if(success){
        resolve("Operation succeeded")
    }
    else{
        reject('Operation failed')
    }
})

// Consuming a Promise
// You consume a promise by attaching handlers using .then() and .catch() methods:

// A) Using .then(), .catch()

myPromise
.then(function(data){
    console.log(data); 
})
.catch(function(error){
    console.log(error); 
})
.finally(function(){
    console.log("promise settled");
})

// B)  Using async/await

async function ayush(){
    try {
        const response = await myPromise;
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

// Example using fetch api

async function ayushi(){
    try {
        const response= await fetch('')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
ayushi();  


OR 

fetch('')
.then((response)=>{
    return response.json()
})
// Handle krne k liye ke aur then aayga
.then((data)=>{
    console.log(data);  
})
// data ek variable ka naam hai bass jo upar wale then ne return kiya hai
.catch((error)=>{
    console.log(error);
    
})

// More example 
// Example 1

const promiseOne = new promise(function(resolve, reject){
    setTimeout(function(){
        console.log("successfull");
        resolve()
    },2000)
})
promiseOne
.then(function(){
    console.log("promise consumed"); 
})
.catch(function(error){
    console.log("error"); 
})

// Example 2

new promise(function(resolve, reject){
    setTimeout(function(){
        console.log("successfull");
        resolve()
    },2000)
})
.then(function(){
    console.log("promise consumed"); 
})
.catch(function(error){
    console.log("error"); 
})

// Example 3

const two = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("success");
        resolve({username:'ayush', email: 'ayusjh@gmail.com'})
    },2000)
})
two
.then(function(user){
console.log(user);
})

// Example 4

const three= new promise(function(resolve,reject){
    setTimeout(function(){
        let userData={
           username: "john_doe",
            email: "john@example.com",
            age: 30
        }
            resolve(userData);
    },2000)
})
three
.then(function(userData){
    console.log("userData");
})
.catch(function(error){
    console.log("error"); 
})

// Example 5 IMP

const five = new promise (function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username: "Aayu", email: "suce.dw8w"})
        } else{
            reject('something went wrong')
        }
    },2000)
})
five
.then(function(data){
    console.log(data);
    return data.username;
})
.then(function(username){
    console.log(username);
})
.catch(function (error) {
    console.log("Error");
  })
  .finally(function () {
    console.log("Promise is either resolved or rejected");
  });
