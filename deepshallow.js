 // Shallow Copy
// A shallow copy of an object is a copy whose properties share the same references as those in the original object. If the original object contains nested objects, the shallow copy will only copy the references to those nested objects, not the actual objects themselves.

// let obj1 = { name: "John", details: { age: 25, city: "New York" } };
// let obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.name = "Doe";  // Modifies only obj2
// obj2.details.age = 30; // Modifies both obj1 and obj2 (because it's a shared reference)

// console.log(obj1); 
// // Output: { name: "John", details: { age: 30, city: "New York" } }
// console.log(obj2); 
// // Output: { name: "Doe", details: { age: 30, city: "New York" } }
// The details object is shared between obj1 and obj2, so changes in one reflect in the other.

// Methods for Creating a Shallow Copy

//1. Spread Operator (...)
// let objCopy = { ...originalObj }; Format
// let originalObj = { name: "John", details: { age: 25, city: "New York" } };
// let objCopy = { ...originalObj };

// objCopy.name = "Doe";  // Modifies only objCopy
// objCopy.details.age = 30; // Modifies both originalObj and objCopy (because it's a shared reference)

// console.log(originalObj); 
// // Output: { name: "John", details: { age: 30, city: "New York" } }
// console.log(objCopy); 
// // Output: { name: "Doe", details: { age: 30, city: "New York" } }


//2. Object.assign()
// let objAssignCopy = Object.assign({}, originalObj); Format
// let originalObj = { name: "John", details: { age: 25, city: "New York" } };
// let objAssignCopy = Object.assign({}, originalObj);

// obj // Modifies only objAssignCopy
// objAssignCopy.details.age = 30; // Modifies both originalObj and objAssignCopy (because it's a shared reference)

// console.log(originalObj); 
// // Output: { name: "John", details: { age: 30, city: "New York" } }
// console.log(objAssignCopy); 
// // Output: { name: "Doe", details: { age: 30, city: "New York" } }

// 3. Array.slice()
// // let arr = [1, 2, 3, 4];
// // let arrCopy = arr.slice();
// let arr = [1, 2, 3, 4];
// let arrCopy = arr.slice();

// arrCopy[0] = 10; // Modifies only arrCopy

// console.log(arr); 
// // Output: [1, 2, 3, 4]
// console.log(arrCopy); 
// // Output: [10, 2, 3, 4]

// 2. Deep Copy
// A deep copy creates a completely independent clone of an object, including all nested objects. Modifications in the copied object do not affect the original object.

// Example of Deep Copy

// 1.Using structuredClone() (best method for deep copy):
// let obj1 = { name: "John", details: { age: 25, city: "New York" } };
// let obj2 = structuredClone(obj1);
// obj2.name = "Doe";  // Modifies only obj2
// obj2.details.age = 30; // Modifies only obj2

// console.log(obj1); 
// // Output: { name: "John", details: { age: 25, city: "New York" } }
// console.log(obj2); 
// // Output: { name: "Doe", details: { age: 30, city: "New York" } }

// 2. JSON.parse(JSON.stringify(obj)) (Limited but simple)
// let deepCopy = JSON.parse(JSON.stringify(originalObj));


// 3. Lodash _.cloneDeep() (Best library-based method)

// let originalObj = { name: "John", details: { age: 25, city: "New York" } };
// let deepCopy = _.cloneDeep(originalObj);

// deepCopy.name = "Doe";  // Modifies only deepCopy
// deepCopy.details.age = 30; // Modifies only deepCopy

// console.log(originalObj); 
// // Output: { name: "John", details: { age: 25, city: "New York" } }
// console.log(deepCopy); 
// // Output: { name: "Doe", details: { age: 30, city: "New York" } }