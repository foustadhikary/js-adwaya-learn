let myYoutubeName="hiteshChaudhurydotcom"
let anotherName=myYoutubeName
console.log(anotherName);

anotherName="chaiAurCode" //changes are made to the copy and not in the main memory block in myYoutubeName

console.log(anotherName);
// console.log(myYoutubeName);



let userOne={

    email: "user@google.com",
    upi:"user@ybl"


}//this goes to the heap memory we donot get copy we get reference of original value

let userTwo=userOne

userTwo.email="adwayayaadhikary@gmail.com"

console.log(userOne);
console.log(userTwo);