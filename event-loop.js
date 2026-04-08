const fs = require("fs") ;

const a = 100 ;

setImmediate(() => console.log("setImmediate")) ;
Promise.resolve("Promise").then(console.log) ;

fs.readFile("./file.txt" ,"utf-8" , () => {
    console.log("file reading CB") ;
})

setTimeout(() => {console.log("timer Expired")},0) ;

process.nextTick(() => console.log("process . next Tick")) ;

function printA(x) {
    console.log("a=" , x ); 
}

printA(a) ;
console.log("this is the last line of file")