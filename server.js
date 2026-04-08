const http = require("http") ;


const server = http.createServer((req,res) => {
    res.end("hello fellas!, Gulab jaamun this side") ;
}) ;

server.listen(1234) ;