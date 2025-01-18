// In JavaScript, prototypes are objects that are linked to other objects to provide them with shared properties and methods. 
// Prototype inheritance is a way of creating new objects from existing objects by copying the properties and methods of the existing object.

// Every object in JavaScript has a prototype, which is an object that contains all the properties and methods that the object inherits. 
// When you create a new object using a constructor function, the prototype of the new object is set to the prototype of the constructor function.

//Define constructor function 
function Person(name, score){
    this.name= name;
    this.score= score;
}

// Add a method to the Person prototype
Person.prototype.increment = function(){
    this.score++
    console.log(this.score);
}

Person.prototype.PrintMe = function(){
    console.log(`Score is ${this.score}`);
}

// Create an instance of Person
const Person1 = new Person('Ayush', 88)
const Person2 = new Person('Naman', 44)

// Call the method
Person1.increment();
Person1.PrintMe();