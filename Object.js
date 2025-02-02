 
// const user = {
//     username: "Ayush Gupta",
//     email: "abc@gmail.com",
//     Password: "123",
//     'First Name': "Ayush"
// }
// console.log(user.username);
// console.log(user['First Name']);


// //overwrite
// user.email = 'luv@gmail.com'
// console.log(user.email);

// Freeze the 'Password' property
// Object.defineProperty(user, 'Password', {
//     writable: false, // Prevents changes to the property
//     configurable: false, // Prevents deletion or redefinition
// });

// Testing the behaviour
// user.Password = "456"; // Attempt to modify
// console.log(user.Password); // Output: "123"


// delete user.Password; // Attempt to delete
// console.log(user.Password); // Output: "123" (still exists)

// //Freeze
// Object.freeze(user)
// user.Password= '27wis8'
// user.username='dcshdis'
// console.log(user.Password);
// console.log(user.username);


// Access key and Value 
// const user1 = {
//     username: "Ayush Gupta",
//     email: "abc@gmail.com",
//     Password: "123",                                
// }

// console.log(Object.keys(user1));
// console.log(Object.values(user1));