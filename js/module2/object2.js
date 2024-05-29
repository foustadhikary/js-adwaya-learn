// const tinderUser=new Object(): singelton object
const tinderUser={}// non singleton object

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstName:"hitesh",
            lastName:"chaudhury",
        }
    }
}
console.log(regularUser.fullname.userFullname.firstName);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={3:"a",4:"b"}

// const obj3=Object.assign({},obj1,obj2,obj4)//{}->works as a target and the rest acts as a source

const obj3={...obj1,...obj2}
// console.log(obj3);

// array of objects 

const users=[


    {
        id:1,
        email:"adwaya@gmail.com",
    },
    {
        id:2,
        email:"adwaya@gmail.com",
    },
    {
        id:3,
        email:"kaka@gmail.com",
    },
    {
        id:4,
        email:"brock@gmail.com",
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));// returns an array takes all the keys and put them in an array

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// every key value is put into an array

console.log(tinderUser.hasOwnProperty('isLogged'));// show is the given property is present inside the object or not





