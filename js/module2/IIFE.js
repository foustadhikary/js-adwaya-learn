// immediately invoked function expresion (IIFE)



(function chai(){
    //named iife
    console.log(`DB CONNECT`);
})();// global scope kaay variable see kafi baar pollution hoti hai toh uss plooution saay bachane kaay liye hmm IIFY lagate hai

((name)=>{
    console.log(`DB CONNECTED to ${name}`);
})("adwaya")