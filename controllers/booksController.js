const Book = require("../models/Book");

// Pobranie wszystkich książek
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

// Pobranie jednej książki po ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (err) {
    console.error("Error fetching book by ID:", err);
    res.status(500).json({ error: "Failed to fetch book" });
  }
};

// Dodanie nowej książki
exports.addBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
      return res
        .status(400)
        .json({ error: "Title, author, and year are required" });
    }

    const newBook = await Book.create({ title, author, year });
    res.status(201).json({ id: newBook.id });
  } catch (err) {
    console.error("Error adding book:", err);
    res.status(500).json({ error: "Failed to add the book" });
  }
};

// Usunięcie książki po ID
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.destroy();
      res.status(204).end(); // No content
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (err) {
    console.error("Error deleting book:", err);
    res.status(500).json({ error: "Failed to delete book" });
  }
};
