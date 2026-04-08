const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => {
    console.log("2nd setTimeout");
  });
  process.nextTick(() => console.log("2nd next tick"));
  setImmediate(() => {
    console.log("2nd setImmediate");
  });
  console.log("file reading CB");
});

process.nextTick(() => {
    console.log("next Tick") ;
})

console.log("last line of the file")
