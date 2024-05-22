// primitive are of 7 types
// 1)string:they are call by value, original access is not given copy is given
// 2)number 3)null 4)boolean  5)null(value has not yet being received) 6)undefined (vlue is not yet assigned) 
// 5)symbol 
// BigInt 


//  non primitive 
//array, objects, functions
// !!!!!! js is dynamically typed language


const score=100
const scoreValue=100.3
const isLoggedIn=false
const temp=null
let userEmail;


const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id === anotherId);


const bigNumber=24314312432234234n// it becomes a big int if you put n

const heros=["shaktiman","nagrah","doga"]


let myobj={
    name:"adwaya",
    age:22,
}

const myfunction=function(){
    console.log("hello world");
}


console.log(typeof id);

//return type of function is specially called object function

