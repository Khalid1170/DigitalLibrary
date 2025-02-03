import React from 'react';
// import './App.css';

const Display = ({ book }) => {
  return (
    <div className="book">
      <div className="book-card">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
      </div>
    </div>
  );
};

export default Display;
