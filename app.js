require("./xyz");
// const obj = require("./calculate/sum");
// const { multiply } = require("./calculate/multiply") 


const { multiply , sum ,x }  = require('./calculate')
const data = require('./data.json') ;

var name = "namaste prem";

var a = 10;

var b = 20;

sum(a,b)
multiply(a,b);
console.log(data)

console.log(name);

console.log(x);
