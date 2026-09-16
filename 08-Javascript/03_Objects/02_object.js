// const tinderUser = new Object() // singleton

 /* const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Yusuf"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        username: {
            firstname: "Yusuf",
            lastname: "Motiwala",

        }
    }
} // nested objects

// console.log(regularUser.fullname.username.firstname);

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // {} optional parameter guarantees assignment

const obj3 = {...obj1, ...obj2} // spread, just like array
console.log(obj3);

const users = [ 
    {
        id : 1,
        email: "y@gmail.com",
    },
    {

    },
    {

    },
] // Array of objects

console.log(Object.keys(tinderUser)); // returns alll keys, 'datatype returned is array of keys'
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // each key:value is made into an array [key, value]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true/false
*/

const course = {
    coursename : "Js in hindi",
    price: "998",
    courseInstructor: "Yusuf"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // destructuring object
console.log(instructor); // Yusuf

//{
//    "name": "hitesh",
//    "coursename": "js in hindi",
//  "price": "999"
// } // JSON



