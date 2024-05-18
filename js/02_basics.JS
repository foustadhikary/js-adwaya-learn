const accountId = 144553
let accountEmail = "adwaya@google.com"
var accountPassword = "12345"
accountCity = "purulia"
let accountState;

// accountId = 2 // not allowed


accountEmail = "aa@aa.com"
accountPassword = "211121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])