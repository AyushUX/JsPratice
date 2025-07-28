// A prototype in JavaScript is an internal object that allows one object to inherit properties and methods from another. 
// Every JavaScript object has a hidden property called [[Prototype]] (often accessed via __proto__ or through methods like Object.getPrototypeOf()) that points to its prototype object. 
// This creates a chain of objects called the prototype chain.

// When you try to access a property or method on an object, JavaScript first looks at the object itself. If the property isn't found there, it looks up the prototype chain, checking the object's prototype, then the prototype's prototype, and so forth, until either the property is found or the end of the chain (null) is reached.

// Example1
let person = {
    greet: function(){
        console.log("Hello!");
    }
}
// This person object has one ability: it can greet.


let student= Object.create(person); // creates a single student object

// Now student doesn’t have its own greet() method, but it remembers that if someone asks it to greet, it can borrow it from person.

student.study= function(){ // add method to ONLY this student
    console.log("studying");
}
// Fine if student is a one-time object and you're not creating many others.



Important - 
// Now you’re giving the student its own special ability — to study. This is like teaching the student a new skill that the parent doesn’t have.

student.study();
student.greet();


// Example 2

let product= {
    title: " Generic Product",
    price: 100,
    getDetails: function(){
        console.log('${this.title} costs ${this.price}');
    }
}

let digitalProduct = Object.create(product);

// Overriding and adding new properties
digitalProduct.title = "E-book on JavaScript";
digitalProduct.price = 299;
digitalProduct.downloadLink = "https://example.com/ebook";

// Overriding getDetails method
digitalProduct.getDetails= function(){
    console.log('${this.title} and ${this.price}');
    console.log('${this.downloadLink}'); 
}
// Calling methods
product.getDetails();        // Generic Product costs ₹100
digitalProduct.getDetails(); // E-book on JavaScript costs ₹299 + link


// Example 3

let user= {
    name: "Anonymous",
    login: function(){
        console.log('${this.name} logged in');
    }
}
// Inherit from user
let customer= create.Object(user);
customer.purchase= function(item,price){
    console.log('${this.name} purchased ${item} for ₹${price}');
}

// Inherit from customer
let premiumCustomer= Object.create(customer);
premiumCustomer.discount= 0.1

// Override purchase method
premiumCustomer.purchase= function(item,price){
    let discountedPrice= price - price* this.discount;
    console.log('${this.name} (premium) purchased ${this.item} for ${this.price}');
}

// Create instances
let basicUser= Object.create(user)
basicUser.name= "Ravi";

let regularCustomer = Object.create(customer);
regularCustomer.name = "Asha";

let goldCustomer = Object.create(premiumCustomer);
goldCustomer.name = "Mehul";

// Test calls
basicUser.login();              // Ravi logged in
regularCustomer.login();        // Asha logged in (inherited)
regularCustomer.purchase("Book", 500); // Asha purchased Book for ₹500
goldCustomer.login();           // Mehul logged in
goldCustomer.purchase("Course", 1000); // Mehul (Premium) purchased Course for ₹900


// Example 4

let myhero = ["thor", "spiderman"]

let heropower= {
    thor: "hammer",
    spiderman: "sling",

    getspidypower: function(){
        console.log('spidy power is ${this.spiderman}');
        
    }
}
// kisi ko agr sabme dena hai to direct object m d do kuki sab aage jaakr object hi hai 
// yaha p ayush ko sabme dete hai

Object.prototype.ayush= function(){
    console.log("ayush is present everywhere");
}
myhero.ayush();
heropower.ayush()

// upar to kiya object m hi inject krdiya to sabke pass hoga aab aaray m krke dkhte hai ki kiske ksike pass jyga

Array.prototype.monu = function(){
    console.log('Monu is in array');
}
// neeche wali line to sahi honi chyie kuki array m diya hai
myhero.monu()

//Ye galat hogi
heropower.monu()

// Example 5

function person(name, score){
    this.name= name;
    this.score= score;
}

// Add a method to the Person prototype
// Agr bahut saare student banane hai to esa use krnhe warna example 1 jesa
person.prototype.increment= function(){ 
    this.score++
    console.log(this.score);
}
person.prototype.printMe= function(){
    console.log('score is ${this.score}');
}

// Create an instance of Person
const Person1 = new person('ayush', 55)
const Person2 = new person('ayushii', 58)

// Call the method
Person1.increment();
Person1.PrintMe();
