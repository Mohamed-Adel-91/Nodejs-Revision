const express = require("express");
const bookController = require("../controllers/books.controller");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.get("/api/books", authMiddleware, bookController.getAllBooks); // get all books
router.get("/api/books/:id", authMiddleware, bookController.getOneBook); // get one book by id
router.post("/api/books/", authMiddleware, bookController.createBook); // create one book
router.delete("/api/books/:id", authMiddleware, bookController.deleteBook); // delete one book by id
router.put("/api/books/:id", authMiddleware, bookController.updateBook); // update one book by id

module.exports = router;
