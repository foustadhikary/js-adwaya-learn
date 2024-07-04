const promiseOne= new Promise(function(resolve,reject){
    // do and async task
    //DB calls, cryptoghraphy , network
    setTimeout(function(){console.log('async task is complete');
        resolve()
        
    },1000)
} ) 
promiseOne.then(function(){
    console.log("promise consumed");
})
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async tsk two");
        resolve()
    },1000);
}).then(function(){
    console.log("async two resolve");
})
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@exampl.com"})//resolve maay zayadatar object pass hota hai 
    },1000)

})
promiseThree.then(function(user){
    console.log(user);

})// yahan pe sari value return hoti hai
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=>console.log("the promise is wither resolve or rejected"))

// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
// console.log(" ");
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('JS went wrong')
        }
    },1000)

});
async function consumePromiseFive(){
    try{
        const response = await promiseFive // promise is a object not a method
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
// consumePromiseFive()
// async function getAllUsers(){
// //     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then((data) =>{
    console.log(data)
})
.catch((error)=>console.log(error))