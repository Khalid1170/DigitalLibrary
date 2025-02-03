import React from 'react';

const Search = ({ onSearch }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search title or genre" 
        onChange={(e) => onSearch(e.target.value)} 
      />
    </div>
  );
};

export default Search;
