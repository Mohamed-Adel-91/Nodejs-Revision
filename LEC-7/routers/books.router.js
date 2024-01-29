const express = require("express");
const bookController = require("../controllers/books.controller");
const router = express.Router();

router.get("/api/books", bookController.getAllBooks); // get all books
router.get("/api/books/:id", bookController.getOneBook); // get one book by id
router.post("/api/books/", bookController.createBook); // create one book
router.delete("/api/books/:id", bookController.deleteBook); // delete one book by id
router.put("/api/books/:id", bookController.updateBook); // update one book by id

module.exports = router;
