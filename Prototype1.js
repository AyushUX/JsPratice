let myhero = ["thor", "spiderman"]

let heropower= {
    thor: "hammer",
    spiderman: "sling",

    getspidypower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
// kisi ko agr sabme dena hai to direct object m d do kuki sab aage jaakr object hi hai 
// yaha p ayush ko sabme dete hai

Object.prototype.ayush= function(){
    console.log("Ayush is Present everywhere");
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