// a server that listens for incoming requests 
// and sends back a response; 

let http = require("http");

let ourApp = http.createServer(function(req, res){
    // response object
    if(req.url == "/") {
        res.end("Hello and welcome to our homepage!")
    }
    if(req.url == "/about") {
        res.end("You can read everything about our company here.")
    }
    // fallback
    res.end("We cannot find the page you're looking for.")
});

// listen method with port 3000 (localhost:3000)
ourApp.listen(3000);

