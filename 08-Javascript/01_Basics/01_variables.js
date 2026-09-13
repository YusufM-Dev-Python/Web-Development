const accId = 12345
let accEmail = "ymotiwala19@gmail.com"
var accPass = "123456"

accCity = "Mumbai"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accEmail = "daddy@gmail.com"
accCity = "Delhi"

console.table([accEmail, accId, accPass, accCity])