const accountId = 144553
let accountEmail = "Harshang@gmail.com"
var accountPassword = "1234"
let accountState;
/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountCity = "Vadodara"

// accountId = 2 this thing is not allowed

accountEmail="Harshang123@gmail.com"
accountPassword = "456789"
accountCity = "Ahmedabad"

console.log(accountId); 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);