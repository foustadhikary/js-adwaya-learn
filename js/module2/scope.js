// var c=300// var is a bekar value
let a =300

if (true){//block scope

    let a =10;
    const b=20
    console.log("inner: ", a);
   
}
console.log(a);// a in global scope is 300 and insode block it is 
// console.log(b);
// console.log(c);
