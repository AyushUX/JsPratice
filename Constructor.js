// A constructor function in JavaScript is used to create and initialize objects. It's a special type of function that is used specifically for object creation. Constructor functions are typically named with an initial uppercase letter to distinguish them from regular functions.

// Here's the basic structure of a constructor function:
// function ConstructorName(param1, param2, ...) {
//     this.property1 = param1;
//     this.property2 = param2;
//     // Additional properties and methods can be defined here
// }
// New keyword in JavaScript is used to create an instance of an object that has a constructor function. On calling the constructor function with 'new' operator, the following actions are taken: A new empty object is created.

// The new keyword also has the following effects:
// It creates a new empty object.
// It sets the prototype of the new object to the constructor function's prototype property.
// It binds the "this" keyword to the newly created object.
// It returns the newly created object.

// For example, the following code would create a new instance of the Person object and set its name property to "John Doe":
// const person = new Person();
// person.name = "John Doe"; 


// this Keyword:
// Inside the constructor function, the this keyword refers to the newly created object.
// Properties and methods are assigned to the this object to define its initial state.

// Property Initialization:
// Properti n es of the object are initialized using the this keyword followed by the property name (this.property1, this.property2,  etc.).
// The values of these properties are typically set using the parameters passed to the constructor function.

// Additional Properties and Methods:
// Additional properties and methods can be defined within the constructor function as needed.

function Person(name, age){
    this.name=name;
    this.age = age;

    this.greet= function(){
        console.log("Hello, My name is" + this.name + "and I am" + this.age + "year's old");
    }
}

let Person1= new Person('Ayush', 98);
let Person2 = new Person ('Deva', 24)

Person1.greet();
Person2.greet();

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   const auto = new Car('Honda', 'Accord', 1998);
  
//   console.log(auto instanceof Car);
//   // Expected output: true
  
//   console.log(auto instanceof Object);
//   // Expected output: true
