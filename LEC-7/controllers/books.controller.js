const BookModel = require("../models/books.schema");

// @desc getAllBooks

exports.getAllBooks = async function (req, res) {
    try {
        const Books = await BookModel.find();
        return res.json({ message: "success", data: Books });
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};

// @desc getOneBook

exports.getOneBook = async function (req, res) {
    try {
        const Book = await BookModel.findById(req.params.id);
        if (!Book) throw new Error("No Book was found in library by this ID.");
        else return res.json({ message: "Success", data: Book });
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};

// @desc deleteBook

exports.deleteBook = async function (req, res) {
    try {
        const Role = req.user.role;
        if (Role === "admin") {
            await BookModel.findByIdAndRemove(req.params.id);
            return res.json({ message: "Books deleted", data: [] });
        } else {
            return res
                .status(401)
                .json({ message: "Unauthorized , Access Denied" });
        }
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};

// @desc updateBook

exports.updateBook = async function (req, res) {
    try {
        const Role = req.user.role;
        if (Role === "admin") {
            await BookModel.findByIdAndUpdate(req.params.id, req.body);
            return res.json({ message: "Books updated", data: req.body });
        } else {
            return res
                .status(401)
                .json({ message: "Unauthorized , Access Denied" });
        }
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};

// @desc createBook

exports.createBook = async function (req, res) {
    try {
        const Role = req.user.role;
        if (Role === "admin") {
            const createBook = await BookModel.create(req.body);
            return res.json({ message: "Book Created", data: createBook });
        } else {
            return res
                .status(401)
                .json({ message: "Unauthorized , Access Denied" });
        }
    } catch (err) {
        return res.status(400).send({ message: err });
    }
};
