// const user={
//     username:"adwaya",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , wlcome to website`);
//         console.log(this);//talk about the curernt value/context
//     }

// }
// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()
// const chai = () => {//for arrow function remove function keyword and give =>
//     let username="hitesh"
//     console.log(this);

// }
// chai()


// const addTwo=(num1,num2)=> {
//     return num1+num2
// }//explicit return
// const addTwo=(num1,num2)=> (num1+num2)// one other way to write implicit return
const addTwo=(num1,num2)=>({username:"hitesh"})
console.log(addTwo(3,5));
