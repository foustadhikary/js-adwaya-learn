// let score=33

// // const {score}=req.body we dont have any idea which type of value came as input from the server
// let sore=undefined
// console.log(typeof score)
// console.log(typeof (sore))

// let isNumber=Number(sore)// sore is a string variable is getting converted in number
// console.log(typeof (isNumber))
// console.log(isNumber)// it is not a number datatype but when seen the type it display as a number i9f null it shows 0
// // 33-> number
// // 33abc->NaN
// // null->0
// // undefined->NaN

// let isLoggedIn=3
// let BooleanIsLoggedIn=Boolean (isLoggedIn)
// console.log(typeof BooleanIsLoggedIn)
// console.log("the value of IsLoggedin is"+BooleanIsLoggedIn)
// // 1->true
// // 0->false
// // "" empty string false
// // "abc"->true
// let num=33
let numToString=String(num)
console.log(numToString);
console.log(typeof numToString);