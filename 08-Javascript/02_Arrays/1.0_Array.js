// Array

const myArr = [0,1,2,3,4,5,true,"Yusuf"] // all types of datatypes
const myHeroes = ["Ironman", "Captain America", "Thor"]

const myArr2 = new Array("Daddy", "Mommy")

console.log(myArr[0]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(6) // inserts at the start but need to shift all elements, too slow
myArr.shift() // removes first element

console.log(myArr.includes(2)); // true/false
console.log(myArr.indexOf(8)); // if not in array - "-1"

const newArr = myArr.join() // into string with , 
console.log(typeof newArr); // string
console.log(newArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // inclusive range and (1,3) elements from original array is removed
console.log("C ", myArr);
console.log(myn2);



