const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  
  // You can add more fields as per your book requirements
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;