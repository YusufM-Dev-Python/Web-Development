function myName(){
console.log("Y");
console.log("U");
console.log("S");
console.log("U");
console.log("F");
}

// myName()

function addTwoNumbers(num1, num2){

    // let result = num1 + num2
    // return result
    return num1 + num2
    
} // parmeters - when function is defined

const result = addTwoNumbers(2,5) // arguments - when function is called

console.log("Result: ", result);

function loginUserMessage(username = "Sahil"){ // setting default values
    if(!username){ // this block will never execute 
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Yusuf"));
console.log(loginUserMessage());

function calcPrice(val1, val2, ...num1){
    return num1
}

console.log(200,300,500,700);

const user = {
    username: "Yusuf",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Daddy",
    price: 988
})

const myArr = [200,400,800]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(myArr));

