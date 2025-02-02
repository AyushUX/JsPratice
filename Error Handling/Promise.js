// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation.
// This function defines the logic for the asynchronous operation and has two arguments:
// resolve: A function used to indicate successful completion of the operation and provide the resulting value.
// reject: A function used to indicate failure of the operation and provide an error object.

// A Promise can be in one of three states:

// Pending: The initial state, meaning the operation is still ongoing.
// Fulfilled: The operation completed successfully, and the resolve function was called with the resulting value.
// Rejected: The operation encountered an error, and the reject function was called with an error object.

//Type1
//Create Promises
const promiseone = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Successful");
    resolve();
  }, 1000);
});
// A Promise takes a function as an argument, known as the executor function, which has two parameters:
// resolve → Call this when the operation is successful.
// reject → Call this when the operation fails.

// setTimeout(function() { ... }, 1000);
// Inside the Promise, setTimeout() is used to simulate an asynchronous task (like fetching data).
// The function inside setTimeout() executes after 1 second (1000 ms).
// Consume Promises 
promiseone.then(function () {
  console.log("Promise Consumed");
});
promiseone.catch((error) => {
  console.log("Error");
});

//Type2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Sucess");
    resolve(0);
  }, 1000);
})
  .then(function () {
    console.log("Promise Consumed");
  })
  .catch((error) => {
    console.log(error);
  });

//Type3
const three = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Sucessful");
    resolve({ username: "Ayush", email: "ausj@gmail.com" });
  }, 1000);
});
three.then(function (yfu) {
  console.log(yfu);
});
three.catch((error) => {
  console.log(error);
});

//Type3A
// Function to simulate fetching user data from a server (asynchronous)
function fetchUserData() {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous operation (fetching data)
    setTimeout(() => {
      let userData = {
        username: "john_doe",
        email: "john@example.com",
        age: 30,
      };
      resolve(userData); // Resolve with the fetched user data
    }, 1500); // Simulating a delay of 1.5 seconds
  });
}

// Consuming the Promise
console.log("Fetching user data...");
fetchUserData()
  .then((userData) => {
    // This function is called if the promise is resolved
    console.log("User data fetched successfully:");
    console.log(userData);
  })
  .catch((error) => {
    // This function is called if the promise is rejected
    console.error("Error fetching user data:", error);
  });

//Type4
const four = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Aayu", email: "suce.dw8w" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

four
  .then(function (user) {
    console.log(user);
    return user.username; 
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log("Error");
  })
  .finally(function () {
    console.log("Promise is either resolved or rejected");
  });
