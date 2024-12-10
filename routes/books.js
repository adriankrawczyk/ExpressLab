const express = require("express");
const {
  getBooks,
  getBookById,
  addBook,
  deleteBook,
} = require("../controllers/booksController");
const router = express.Router();

router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.post("/books", addBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
