// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2026, 0, 26) // Months start with 0 - just like array index
//console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2026, 0, 26, 5, 3)
//console.log(myCreatedDate.toLocaleString());
//let myCreatedDate = new Date("01-28-2026")

let myTimeStamp = Date.now()
console.log(myTimeStamp); // in milliseconds
console.log(myCreatedDate.getTime()); // in milliseconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear()); // many .get methods








