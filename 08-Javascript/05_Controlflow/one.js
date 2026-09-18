// if
// const isLoggedIn = true
// const temperature = 41

// if (temperature === 41){
//     console.log("less than 50");   
// }
// else{
//     console.log("Temperature is greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==, '===' -used for type checking as well
// var - has global scope, but 'const', 'let' - is best for block scope

// const score = 200
// if(score > 100){
//     var power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // power is printed outside it's scope as declared inside if

// const balance = 1000

// if(balance > 500) console.log("test"); else console.log("Insufficient");, Avoid

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || LoggedInFromEmail){
    console.log("User logged in");
    
}

