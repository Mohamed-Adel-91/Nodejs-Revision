const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const URI =
    "mongodb+srv://mohamed101291:22546344Mohamed@magcamp.tlnt3gu.mongodb.net/magcamp?retryWrites=true&w=majority";
const userRouter = require("./routers/users.router");
const bookRouter = require("./routers/books.router");
app.use(bodyParser.json());

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(URI);
        console.log("connecting to the database ....!!");
    } catch (err) {
        console.log(`error in connecting to the database : ${err} `);
        process.exit();
    }
};
connectDB();

app.use("/", userRouter);
app.use("/", bookRouter);

app.listen(8000);

// Create  CRUD operations on users collection
// Complete the auth system
// Secure our API's
// Handling permissions in API's
