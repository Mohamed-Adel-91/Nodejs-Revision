// 2- Modules and Modules Types and how to create own ?
// 3- How to handle filesystem ?

const http = require("http");
const dateTime = require("./date");
const fs = require("fs");

http.createServer(function (req, res) {
    fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write(data);
        res.write("Hello world  , The time is now : " + dateTime.myDateTime());
        console.log("Client connected");
        res.end();
    });
}).listen(7002);

// Module Types :
// 1- built in lib >> http , fs
// 2- third party lib >> npm ,express ,MongoDB ,React
// 3- your own module
