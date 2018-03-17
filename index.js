const http = require("http");
const https = require("https");
const path = require("path");
const fs = require("fs");


/*
open git bash and type below commond to generate self signed ssl key and certifiacte
openssl genrsa 1024 > key.pem
openssl req -x509 -new -key key.pem > cert.pem
*/ 


const options = {
    key : path.join(__dirname , "/key.pem"),
    cert :path.join(__dirname, "/cert.pem")
}

http.createServer(function(req, res){
    if(req.url=="/"){

    }else if(req.url == "/getCookie"){

    }

}).listen(9000);

https.createServer(options, function(req, res){
    if(req.url=="/"){

    }else if(req.url == "/getCookie"){

    }
}).listen(8000);
