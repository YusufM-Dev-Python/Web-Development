const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// }) // A callback function with no name and parameter is the value, inside definiton do anything

// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe) // only provide the reference

// coding.forEach( (item,index,arr) => {
//     console.log(item, index, arr);    
// } ) // it has access to each value, index and also the whole array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    
    console.log(item.languageName);
})