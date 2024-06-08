const userEmail=[]

if(userEmail){
    console.log("got user email");
} 
else{
    console.log("don't have user email");
}

// falsy values:

// 1) false
// 2) 0
// 3) -0 
// 4) BigInt
// 5) 0n
// 6) ""
// 7) null 
// 8) undefined
// 9) NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}/* empty function */


if (userEmail.length===0){
    console.log("array is empty");
}
const emptyObject={}

if(Object.keys(emptyObject).length===0){
    console.log("object is empty");
}

// Nullish Coalescing operator (??): null undefined

let val1;
// val1=5 ?? 10

// val1=null ?? 10
// val1= undefined ?? 15
// console.log(val1);
val1=null ?? 10 ?? 20;

console.log(val1);


// trernary operator
// condition ? true:false

const iceTeaPrice=100
iceTeaPrice<=80?console.log("less than 80"): console.log("more than 80");