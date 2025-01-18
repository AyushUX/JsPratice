
const user = {
    username: "Ayush Gupta",
    email: "abc@gmail.com",
    Password: "123",
    'First Name': "Ayush"
}
// console.log(user.username);
// console.log(user['First Name']);


// //overwrite
// user.email = 'luv@gmail.com'
// console.log(user.email);

// Freeze the 'Password' property
Object.defineProperty(user, 'Password', {
    writable: false, // Prevents changes to the property
    configurable: false, // Prevents deletion or redefinition
});

// Testing the behavi4 or
// console.log(user.Password); // Output: "123"

// user.Password = "456"; // Attempt to modify
// console.log(user.Password); // Output: "123" (unchanged)

// delete user.Password; // Attempt to delete
// console.log(user.Password); // Output: "123" (still exists)

// //Freeze
// Object.freeze(user)
// user.Password= '27wis8'
// console.log(user.Password);


// //Rest Parameter 
// //The rest parameter syntax allows a function to accept an indefinite number of arguments as an array


function myBio(...luv) {
    console.log(luv); 
}
myBio('Ayush', 'Gupta', 'CodeSweetly', 'Web Developer', 'Male', 'luv', 'eundce')


// //Spread
const Arr1 = ['ked', 'edi', 'kij']
const Arr2 = ['odi', 'ede', 'vfv']

const merge = [...Arr1, ...Arr2]
console.log(merge);




const ab = {
        1:"a",
        2: "b"
    }

    const bc ={
        3:"c",
        4:"d"
    }

    const cd = {...ab, ...bc}

    console.log(cd);






// //Access key and Value 
const user1 = {
    username: "Ayush Gupta",
    email: "abc@gmail.com",
    Password: "123",

                                      
}

// console.log(Object.keys(user1));
console.log(Object.values(user1));