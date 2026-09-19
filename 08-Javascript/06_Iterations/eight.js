const myNums = [1,2,3]

// const myTotal  = myNums.reduce( function (acc, curr_val) {
//     console.log(`acc: ${acc} and currval ${curr_val}`);
    
//     return (acc + curr_val)
// }, 0) // the returned value is gone back to the accumalator // 0 is acc start value
// curr_val points to values of the array


const myTotal = myNums.reduce( (acc,curr_val) => (acc+curr_val), 0 ) // 0 for acc

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "mobile dev",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    }
]


