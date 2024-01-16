const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    color: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
});

module.exports = mongoose.model("Cars", carSchema);
