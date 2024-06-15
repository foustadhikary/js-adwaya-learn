 const coding=["js","ruby","python","cpp"]

//  coding.forEach( function (item){
//      console.log(item);
//  } )

// coding.forEach( (item)=>{
//     console.log(item);
// } )
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);


// })

const mycoding=[
    {
        langname:'javascript',
        languageFileName:'.js',
    },
    {
        langname:'java',
        languageFileName:'.java',
    },
    {
        langname:'c++',
        languageFileName:'cpp',
    },
]
mycoding.forEach( (item)=>{
    console.log(item.langname);
})