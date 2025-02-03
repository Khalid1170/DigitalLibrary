import React, { useState } from 'react';

// Form component that handles the submission of a new book
const NewBook = ({ onAddBook }) => {
  // Holds the values of the form fields (title, author, genre)
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  // This function is called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    
      // Create a new book object with the current state values
      const newBook = {
        id: Math.random(), 
        title,
        author,
        genre
      };
      
      // Pass the new book object back to the parent component through the onAddBook callback
      onAddBook(newBook);

      // Clear the form fields after submission
      setTitle('');
      setAuthor('');
      setGenre('');
    
  };

  return (
    <div className='Form'>
      {/* Form element that handles user input */}
      <form onSubmit={handleSubmit}>
        <h2>New Book</h2>
        
        <input 
          type="text" 
          placeholder="Title of Book" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} // Update state when user types
        />

        <input 
          type="text" 
          placeholder="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} // Update state when user types
        />

        <input 
          type="text" 
          placeholder="Genre" 
          value={genre} 
          onChange={(e) => setGenre(e.target.value)} // Update state when user types
        />

        {/* Button to submit the form */}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default NewBook;
