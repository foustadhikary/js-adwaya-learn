//array
//(always in square braces)
const myArr=[0, 1, 2, 3, 4, 5 ]//array not necessary have same type of elements
//javascript array are resizale and have mixed datatypes
//not associative array

// console.log(myArr[4]);

const myArr2=new Array(1,2,3,4,5)
// console.log(myArr2);

//array methods



// myArr.push(6)
// console.log(myArr); 
// myArr.pop()//remove last element
// myArr.unshift (9)//element is inserted in the starting of array
// console.log(myArr); 
// myArr.shift()// remove from starting
// console.log(myArr); 


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr=myArr.join()//converts array to string
// console.log(myArr);
// console.log(newArr);


//slice and splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("");
console.log("");

console.log("B",myArr);
console.log("");
console.log("");

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("original array",myArr);

//  splice vs slice  






