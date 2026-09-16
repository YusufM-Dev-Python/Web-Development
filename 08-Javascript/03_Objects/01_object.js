// singleton

// object literals
const mySym = Symbol("mykey1")

const JsUser = {
    name : "Yusuf",
    "Fullname": "Yusuf Motiwala",  // keys are stored as string even if not explicilty mentioned
    location : "Mumbai",
    [mySym] : "mykey1", // syntax for symbol datatype --> []
    email : "yusuf@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]); // Second way
// console.log(JsUser."fullname");  forbidden
console.log(JsUser["Fullname"]);
console.log(JsUser[mySym]);

JsUser.email = "ymoti@google.com" // overwriting values
Object.freeze(JsUser) // to freeze an object from overwriting
JsUser.email = "y@microsoft.com"
console.log(JsUser["email"]); // no change


JsUser.greeting = function(){
    return `Hello Js user, ${this.name}` // to invoke object properties we use 'this'  
}

JsUser.greeting();




