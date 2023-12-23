//What is server and how to create it ?

const http = require("http"); //import http from 'http'  >>means >> HTTP Module

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello world");
    console.log("Client connected");
    res.end();
}).listen(7001);

// localhost:7001  === 127.0.0.1:7001

//200 => ok
//500 => Server Error
//400 => Bad Request
