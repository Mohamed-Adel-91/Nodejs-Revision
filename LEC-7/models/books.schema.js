const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    Publisher: String,
    publishedYear: Number,
    description: String,
});

const BookModel = mongoose.model("Books", bookSchema);
module.exports = BookModel;
