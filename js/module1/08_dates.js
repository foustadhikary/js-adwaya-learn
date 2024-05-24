//Date

let myDate =new Date()
console.log(myDate.toString()); 
console.log(myDate.toDateString()); 
console.log(myDate.toISOString()); 
console.log(" "); 

console.log(myDate.toJSON()); 
console.log(" "); 
console.log(myDate.toLocaleString()); 
console.log(" "); 
console.log(typeof myDate);
console.log(" "); 
console.log(" "); 
// let myCreatedDate=new Date(2023,0,22,5,2 )//
// month starts with 0
// console.log(myCreatedDate.toString()); 
 let myCreatedDate=new Date("2023-01-14")
 let myCreatedDateTwo=new Date("01-14-2023")
 console.log(myCreatedDate);
 console.log(myCreatedDateTwo);
 console.log(" "); 
 console.log(" "); 
 let myTimeStamp=Date.now()
 console.log(myTimeStamp);
 console.log(" "); 
 console.log(" "); 
 console.log(Math.floor(Date.now()/1000));


 let newDate=new Date()
 console.log(newDate.getDay());
 
 
//  `the time is${newDate.getHours()}`

newDate.toLocaleString('default',{
    weekday:"long",
    
})





