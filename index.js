const http = require("http");
const https = require("https");
const path = require("path");
const fs = require("fs");
const util = require("util");


/*
open git bash and type below commond to generate self signed ssl key and certifiacte
openssl genrsa 1024 > key.pem
openssl req -x509 -new -key key.pem > cert.pem
*/ 


const options = {
    key : fs.readFileSync(path.join(__dirname , "/key.pem")),
    cert : fs.readFileSync(path.join(__dirname, "/cert.pem"))
}

http.createServer(function(req, res){
    var cookieString="";
    if(req.url=="/"){
        res.writeHead(200,{
            'Set-Cookie' : cookieString,
            'Content-Type' : 'text/plain'
        })
        res.end("Set http cookie");

    }else if(req.url == "/getCookie"){
        getCookie("cookieHTTP")

    }

}).listen(9000);

https.createServer(options, function(req, res){
    var cookieString="";
    if(req.url=="/"){
        res.writeHead(200,{
            'Set-Cookie' : cookieString,
            'Content-Type' : 'text/plain'
        })
        res.end("Set http cookie");
    }else if(req.url == "/getCookie"){
        getCookie("cookieHTTPS");

    }
}).listen(8000);



var getCookie = (curCookie)=>{
    var cookies = req.headers.cookie;
    if(util.isUndefined(cookies)){
        return  "";
    }else{
        var cookieArray = cookies.split(";");
        for (let index = 0; index < cookieArray.length; index++) {
           
            var curJson = queryString.parse(cookieArray[index]);
            var key = Object.keys(curJson);
            if (key[0].trim() == curCookie){
            return curJson[key[0]];           
                
            }
        }
        
    }
}
