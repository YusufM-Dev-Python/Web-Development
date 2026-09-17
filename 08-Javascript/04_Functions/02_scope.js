{} // Scope

if (true) {
    let a = 10
    const b = 20
    var c = 30
}


//console.log(a);
//console.log(b);
console.log(c); // c gets printed

function one(){
    const username = "Yusuf"

    function two(){
        const website = "youtube.com"
        console.log(username); // child function so we can execute parent variable
        
    } // two() scope ended here 
    //console.log(website); // cannot access this through parent

    two()
    
}

one()

if(true){
    const username = "yusuf"
    if(username === "yusuf"){
        const website = " yt.com"
        console.log(username + website);
    }
    // console.log(website); // scope of inner if ended above cannot access
    
}
// console.log(username); // scope of first if ended above cannot access



