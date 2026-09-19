// for of - directly takes the values, not indices

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// // Element of arr,object etc...

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is: ${greet}`);
    
// }

// Maps

const map = new Map() // Only stores unique values
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
// map.set('IN', "INDIA")

//console.log(map);

for (const [key,value] of map) { 
    console.log(key, value);
    
} // destructured the array for getting each key and value, maps are iterable

const myObj = {
    'game1': 'NFS',
    'game2': 'RDR',
    'game3': 'GTA VI'
}

for (const [key,value] of myObj) {
    console.log(key, value);
    
} // Objects are not iterable