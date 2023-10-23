const express = require('express');
const router = express.Router();
const Book = require('../models/Books.model');

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET a specific book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// POST a new book
router.post('/', async (req, res) => {
    const { title, author, price } = req.body;
    try {
      const newBook = new Book({ title, author, price });
      await newBook.save();
      res.status(201).json(newBook);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // PUT (update) a specific book by ID
  router.put('/:id', async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
        if (!updatedBook) {
          return res.status(404).json({ error: 'Book not found' });
        }
        res.json(updatedBook);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });
    
    // DELETE a specific book by ID
    router.delete('/:id', async (req, res) => {
      try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
          return res.status(404).json({ error: 'Book not found' });
        }
        res.json(deletedBook);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    
    module.exports = router;
      