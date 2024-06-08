// for (let index = 0; index < 10; index++) {
//     const element=index;
//     if (element== 5){
//         console.log(`${element}, is best number`);
//     }
//     console.log(element);
    
    
// }

let myArray=['flash','batman','superman'] 

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}
//keyword: break and continue

for (let i = 1; i <= 20; i++) {
    if (i==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);

    
}