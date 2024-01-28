const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const carSchema = require("./models/cars.schema");
const URI =
    "mongodb+srv://mohamed101291:22546344Mohamed@magcamp.tlnt3gu.mongodb.net/magcamp?retryWrites=true&w=majority";

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

app.get("/cars", async function (req, res) {
    let cars = await carSchema.find().maxTimeMS(30000);
    res.json({ cars: cars, status: 200 });
});

app.post("/cars", async function (req, res) {
    let car = await carSchema.create(req.body);
    res.json({ status: 200, message: "Cars add successfully", car: car });
});

app.put("/cars/:id", async function (req, res) {
    let id = req.params.id;
    await carSchema.findByIdAndUpdate(id, req.body);
    res.json({ message: "car is updated", status: 200 });
});

app.delete("/cars/:id", async function (req, res) {
    let id = req.params.id;
    await carSchema.findByIdAndDelete(id);
    res.json({ message: "car is deleted", status: 200 });
});

app.listen(8000);
