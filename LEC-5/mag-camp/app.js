const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const carSchema = require("./models/cars.schema");
app.use(bodyParser.json());

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(
            "mongodb+srv://mohamed101291:22546344Mohamed@magcamp.vk31gig.mongodb.net/magCamp?retryWrites=true&w=majority"
        );
        console.log("connecting to the database ....!!");
    } catch (err) {
        console.log(`error in connecting to the database : ${err} `);
        process.exit();
    }
};
connectDB();

app.get("/cars", async function (req, res) {
    let cars = await carSchema.find();
    res.json({ car: cars, status: 200 });
});

app.post("/cars", async function (req, res) {
    let car = await carSchema.create(req.body);

    res.json({ status: 200, message: "Cars add successfully", car: car });
});

app.put("/cars/:name", function (req, res) {
    let name = req.params.name;
    cars.find((o, i) => {
        if (o.model === name) {
            cars[i] = req.body;
            return true;
        }
    });
    res.json({ message: "car is updated", status: 200 });
});

app.delete("/cars/:name", function (req, res) {
    let name = req.params.name;
    cars.find((o, i) => {
        if (o.model === name) {
            cars.splice(cars[i], 1);
            return true;
        }
    });
    res.json({ message: "car is deleted", status: 200 });
});

app.listen(5050);
