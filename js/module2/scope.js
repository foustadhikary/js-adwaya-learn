// var c=300// var is a bekar value
// 
// console.log(b);
// console.log(c);
//clouser: filhal child function parent kaay variable ko access kar pate hai

function one(){
    const userName="hitest"
    function two(){
        const website="youtube"
        console.log(userName);
    }
    // console.log(website);// website ka scope pehle hee khatam ho gya
    // two()

}
// one()

// if (true){
//     const userName="hitesh"
//     if (userName==="hitesh"){
//         const website=" youtube"
//         console.log(userName+ website);
//     }
//     // console.log(website);
// }
// console.log(userName);


// ++++++++++++++++++++++++++++++ intersting++++++++++++++++++++++
console.log(addOne(5))
function addOne(num){
    return num+1
}


addTwo(5)//decleration se pehle access nhi kar payengay if we store function on a variable
const addTwo= function(num){
    return num+2
}

