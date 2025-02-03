import React, { useState } from 'react';
import Display from './components/Display';
import SearchBar from './components/SearchBar';
import './App.css'; 
import NewBook from './components/NewBook';

const initialBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" }
];

const App = () => {
  // State to manage the books and search query
  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle adding new books
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  // Function to handle the search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter books based on the search query
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Digital Library</h1>

      {/* Search bar component */}
      <SearchBar onSearch={handleSearch} />

      {/* New book form component */}
      <NewBook onAddBook={handleAddBook} />

      {/* Display filtered books in a grid */}
      <div className="book-grid">
        {filteredBooks.map((book) => (
          <Display key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;
