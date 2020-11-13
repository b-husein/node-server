// a server that listens for incoming requests 
// and sends back a response; 

let http = require("http");

let ourApp = http.createServer(function(req, res){
    res.end("Hello and welcome!")
});
ourApp.listen(3000);

