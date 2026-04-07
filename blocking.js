const crypto = require("node:crypto") ;

var a = 1233 ;
var b = 1233 ;

const { multiply } = require('./calculate/multiply') ;

console.log("hello world!") ;

//sync -  this can block the main thread

crypto.pbkdf2Sync("password" ,"salt" , 5000000 ,50 , "sha512") ;
console.log("first key is generated") ;

//Async function

crypto.pbkdf2("password" , "salt" , 5000000 ,50 ,"sha512" , (err , res) => {
    console.log("second key is generated") ;
})


multiply(a,b) ;