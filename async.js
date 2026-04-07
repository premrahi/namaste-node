const fs = require("fs") ;
const { multiply } = require("./calculate/multiply")
const http = require("http")


console.log("hello fellas!") ;


http.get("http://dummyjson.com/products/1",(res) =>{
    console.log("fetched data successfully") ;
})

fs.readFile("./file.txt" ,"utf-8" , (err , data) => {
    console.log("file data : " , data) ;
})

setTimeout(()=>{
    console.log("the timer is over !!!")
},5000)

multiply(12,5) ;


