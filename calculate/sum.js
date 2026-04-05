console.log("sum.js gets executed");

var x = "this is a module variable saying HI!";

const sum = (a, b) => {
  console.log(a + b);
};

console.log("sum.js execution is over");

module.exports = {
  sum,
  x,
};
