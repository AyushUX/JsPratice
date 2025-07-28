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

// A constructor function in JavaScript is a special type of function used to create and initialize objects. It acts like a blueprint for creating multiple similar objects.

// Key Characteristics of a Constructor Function:

// Named with a Capital Letter by convention.
// Called with the new keyword.
// Inside, this refers to the new object being created.
// You can add properties and methods to the object using this.

// Example 1 - Basic object creation

function Animal(name, type){
    this.name = name;
    this.type= type;
    this.describe= function(){
        console.log('${this.name} is a ${this.type}'); 
    }
}

const dog = new Animal("buddy", "dog")
const cat = new Animal("Whiskers", "Cat");

dog.describe(); // Buddy is a Dog
cat.describe(); // Whiskers is a Cat

// Example 2: 
function Student(name, marks) {
  this.name = name;
  this.marks = marks;

  this.hasPassed = function () {
    return this.marks >= 35;
  };
}

const student1 = new Student("Riya", 80);
const student2 = new Student("Jay", 25);

console.log(student1.hasPassed()); // true
console.log(student2.hasPassed()); // false

// Example 3 - without parameter

function Person() {
  this.name = "John";
  this.age = 23;
  this.greet = function() {
    console.log("Hello, " + this.name);
  };
}

const person1 = new Person();
const person2 = new Person();

console.log(person1.name); // John
console.log(person2.age);  // 23
person1.greet();           // Hello, John


// Example 4 - Sharing Methods via Prototype

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, I am ${this.name}`);
};

const Person1 = new Person("John", 23);
const Person2 = new Person("Jane", 28);

person1.greet(); // Hello, I am John
person2.greet(); // Hello, I am Jane
