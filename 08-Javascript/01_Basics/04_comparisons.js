// === if datatypes aren't equal js will not check

console.log(null > 0); // sometimes NaN or sometimes 0
console.log(null == 0);
console.log(null >= 0);

// These are avoided, clean code is a must

//  Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const new_score = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123') 
const anotherId = Symbol('123')

console.log(id == anotherId); // each symbol is unique

const bigNumber = 3454446043438985 // bigInt


// Reference (Non Primitive)

// Arrays, Objects, Functions

const heroes = ["Ironman", "Captain America", "Shaktiman"] // Array

let myObj = {
    name : "yusuf", // Object (Python's dictionary)
    age : 18,
};

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heroes); // object
// typeof null is also object

// ++++++++++++++++++++++++++++++

// Stack(primitive), Heap(non - primitive)

let myYoutubename = "ymotiwala10@gmail.com"







