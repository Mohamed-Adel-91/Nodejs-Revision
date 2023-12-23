const express = require("express");
const app = express();

// middleware it works between req and server before go to res
app.use(function (req, res, next) {
    console.log("New Request Received " + new Date().toISOString());
    next(); // if i didn't put it we can't access to the server
});

// if i want to  work with middleware with only users
app.use("/users", function (req, res, next) {
    console.log("New Request Received " + new Date().toISOString());
    next();
});

app.get("/", function (req, res) {
    res.send("Hello World!"); // sending back the response
});
app.get("/users/:id/:name", function (req, res) {
    res.send(
        "Hello World! from userId : " +
            req.params.id +
            "\n name : " +
            req.params.name
    );
});

app.listen(5000);

// http methods
// get
// put
// post
// delete

//API Kinds :
// Soap API >> xml file
// Restfull API >> json file (javascript object) >> more readable + faster + more secure
