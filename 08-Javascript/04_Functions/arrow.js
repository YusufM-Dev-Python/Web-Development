const user = {
    username : "yusuf",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);

    }
}  // whatever value inside current context will be printed even if values are changed

user.welcomeMessage()
user.username = "Daddy"
user.welcomeMessage()

console.log(this); // {} as no context inside now

//function chai(){
   // let username = "Yusuf"
    //console.log(this);
    // console.log(this.username); // 'this' only works in objects
       
// }
//chai()

const chai = () => { // Arrow function
    let username = "Yusuf"
    console.log(this.username);

}
chai()

const addTwo = (num1,num2) => {
    return num1 + num2
}

// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2) / implicit return 

// const addTwo = (num1,num2) => ({username: "hitesh"})

console.log(addTwo(4,5));
