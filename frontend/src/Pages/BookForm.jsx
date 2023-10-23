import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to add a new book
    axios.post('http://localhost:8080/api/books', { title, author, price }) 
      .then(response => {
        console.log('Book added successfully:', response.data);
        // Clear the form after successful submission
        setTitle('');
        setAuthor('');
        setPrice('');
      })
      .catch(error => {
        console.error('Error adding book:', error);
      });
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;