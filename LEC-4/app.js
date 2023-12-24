const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let cars = [
    { model: "Tesla", year: 2023, color: "Red" },
    { model: "BMW", year: 2024, color: "Blue" },
];
app.get("/cars", function (req, res) {
    res.json({ car: cars, status: 200 });
});

app.post("/cars", function (req, res) {
    console.log(req.body);
    cars.push(req.body);
    res.json({ status: 200, message: "Cars add successfully" });
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
