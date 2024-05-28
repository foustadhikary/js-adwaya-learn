//singelton

//object literals
//Object.create
const mySymbol=Symbol("key")

const jsUser= {
    name:"adwaya",
    [mySymbol]:"myKey1",
    "full name":"adwaya adhikary",//we cannot access this value any how by dot
    age:18,
    email:"adwaya@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday","Saturday"]



}
//  console.log(jsUser.email);//one way of accesing email
//  console.log(jsUser["email"]);//another way of accesing email
// console.log(jsUser["full name"]);// use [] notation for accesing 
// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);

jsUser.email="adwaya@chatgpt.com"
// Object.freeze(jsUser)// we 
jsUser.email="kaka@gmail.com"
// console.log(jsUser[mySymbol]);
// console.log(jsUser); 

jsUser.greeting = function(){
    console.log("hello js user");


}
jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);// we use this to access the inner properties of an object


} 
 
console.log(jsUser.greeting2());// it gives o/p as undefined
