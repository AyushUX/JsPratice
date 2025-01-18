//For of Loop 
// The for...of loop is primarily used for iterating over iterable objects like arrays, strings, maps, and sets. However, since objects in JavaScript are not inherently iterable, you cannot directly use the for...of loop with plain objects.
// If you want to iterate over the properties of an object, you would typically use a for...in loop or other methods.
//with Array 
//Example1

const names = [1,2,3,4,5]

for (const Luv of names){
    console.log(Luv);
}

//Example1
const fruits = ['apple', 'banana', 'orange', 'mango'];

for (const fruit of fruits) {
    console.log(fruit);
}

//with String
const name1 = 'Ayush'
for (const item of name1){
    console.log(item);
}


//For in
//Key k liye
// for (const keys in userOne){
//     console.log(keys);
// }

//Value k liye
// for (const keys in userOne){
//     console.log(userOne[keys]);
// }

const myBio = {
    username: 'Ayush',
    Email: 'abc@gmail.com',
    Password: '78sjys8'

}
// for (const keys in myBio){
//     console.log(keys);
// }
// for (const keys in myBio){
//     console.log(myBio[keys]);
// }
for (const keys in myBio){
    console.log(`${keys} : ${myBio[keys]}`);
}


//for Each
//[{}, {}, {}] 
// Callback function hai jiska function k baad naam nii likhte hai 

// const Ayush = ['kdid', 'dudj', 'idd']
// Ayush.forEach(function(val){
//     console.log(val);
// })

//[{}, {}, {}] 
// const ayush = [
//     {
//         class: "ieucecesic",
//         id: "272xomx"
//     },
// {
//         class: "icnecne",
//         id: "29w82xiwxjw"
//     },
// {
//     class: "suxwix",
//     id: "2e82e2woxwo"
//     }
// ]

// ayush.forEach(function(item){
//     console.log(item.id);
// })