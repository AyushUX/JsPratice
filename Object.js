const user = {
    username: "ayush gupta",
    email: "abct@gmail.com",
    password: "12345",
    'first name': "ayush"
}
console.log(user.username);
console.log(user['first name']);

// overwrite
user.email= 'etsa@gmail.com'
console.log(user.email);

// Freeze the password property
Object.defineProperty(user,'password',{
    writable: false,
    configurable: false
})
user.password= 'hciejdie93e083'
console.log(user.password);

// Freeze
Object.freeze(user)
user.password='xsxsjw87'
console.log(user.password);


// Methods of Object

// 1. Object.keys
const user = {
    username: "ayush gupta",
    email: "abct@gmail.com",
    password: "12345",
    'first name': "ayush"
}
let ayush= Object.keys(user)
console.log(ayush);

// 2. Object.values
let ayushi= Object.values(user)
console.log(ayushi);

// 3. Object.entries
const entry = Object.entries(user)
console.log(entry);

// 4. Object.assign
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target);  // { a: 1, b: 2, c: 3 }

// Copying into a new object (without modifying the original):
const original = { a: 1 };
const copy = Object.assign({}, original)
console.log(copy);      // { a: 1 }
console.log(original);  // { a: 1 }

// 5. Object.seal
const person= {name: 'ayushww', age:213, city: 'bhopalt'}
Object.seal(person)
person.name='ayush'
person.age=45
person.country='India'

// This won't work.
// Since the object is sealed, you cannot add new properties. This line will be silently ignored in non-strict mode.
console.log(person);

// 6. Object.create
const person= {name: 'ayushww', age:213, city: 'bhopalt'}
const person1= Object.create(person)
person1.name='ayush'
person1.age=45
person1.country='India'
console.log(person1);

// Here's what happens:
// person1 is created with person as its prototype.
// That means person10 does not have its own properties yet, but it inherits from person9.
// name and age now exist directly on person10 (shadowing the inherited ones).
// ✅ country is a new own property of person10.

// Hidden part: Inherited property
// Even though city is not in person1, it's still accessible:
// console.log(person10.city); // "bhopalt" (inherited from person9)
// Why? Because city exists in person, which is the prototype of person1.

// 7. Object.prototype

// Object.prototype is the top-level prototype object in JavaScript. All plain objects ({}), and most objects in JavaScript, inherit from it.
// hasOwnProperty()	Checks if the object has a specific key
// toString()	Converts object to a string
// valueOf()	Returns the primitive value of an object
// isPrototypeOf()	Checks if an object is in another's prototype chain
// propertyIsEnumerable()	Checks if property is enumerable

// 8. Object.getPrototypeOf
// The Object.getPrototypeOf() method returns the prototype of the specified object.
// This is useful for checking the prototype chain of an object.
const person11= {name: 'ayushww', age:213, city: 'bhopalt'}
const prototype= Object.getPrototypeOf(person11)
console.log(prototype);

// Yeh method kisi bhi object ka prototype (uska parent ya "aadhaar object") return karta hai.
// Yeh JavaScript ke inheritance system ko samajhne ke liye useful hai.
// Jab aap Object.getPrototypeOf(person11) likhte ho, toh JavaScript batata hai ki person11 kis se inherit kar raha hai.

// Mostly, yeh hota hai: Object.prototype
// Jisme methods hote hain jaise: toString(), hasOwnProperty() etc.

// 🧠 Yaad Rakho: Har object by default Object.prototype se inherit karta hai — jab tak hum khud kuch change na karein.

// 10. Object.setPrototypeOf
// The Object.setPrototypeOf() method sets the prototype of an object to a specified object.
// This is useful for changing the prototype chain of an object.
const person12= {name: 'ayushww', age:213, city: 'bhopalt'}
const person13= {name: 'ayush', age:45}
Object.setPrototypeOf(person12,person13)
console.log(person12);

// Yeh method kisi object ka parent (ya prototype) change kar deta hai — yaani ki object kis se inherit karega, woh hum manually set karte hain.
// person12 apna khud ka object hai.

// person13 ko aapne uska prototype bana diya using Object.setPrototypeOf.

// Ab agar person12 me koi property nahi milti, toh JavaScript person13 me dekhega.

// Object.setPrototypeOf() ko performance issues ki wajah se production code me zyada use nahi kiya jata.

// Instead, aap Object.create(proto) use karo jab naye object banate ho.
