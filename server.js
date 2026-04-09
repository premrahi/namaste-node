const http = require("http") ;


const server = http.createServer((req,res) => {

    if(req.url === "/getSecretData"){
        res.end(" there is no secret data ");
    }
    res.end("hello fellas!, Gulab jaamun this side") ;
}) ;

server.listen(1234) ;