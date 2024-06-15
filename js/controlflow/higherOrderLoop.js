// object in Array
// [{} , {} , {}]

// const arr=[1 , 2 , 4 , 3 , 5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings="hello world"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);    
// }
// maps: no duplicate
// const map=new Map()
// map.set('USA',"United states of america")
// map.set('IN',"india")
// map.set('IN',"india")
// map.set('FR',"Frace")

// for (const [key,val] of map) {
//     console.log(key,":-",val);
// }

// console.log(map);
const myObject={
    game1:'NFS',
    game2:'SPiderman',
    

}
for (const [key,val] of myObject) {
    console.log(key,":-",val);
    
}