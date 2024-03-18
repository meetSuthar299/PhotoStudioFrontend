import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Call your backend API here to get search results
    // Use the searchTerm state variable to pass the search query to the API

    // For now, let's just log the search term to the console
    console.log(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;
    
