import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = (props) => {
  // useState acts as the memory for what is typed
  const [searchText, setSearchText] = useState('');
  
  // useNavigate is a tool that "magically" changes the URL 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Stops the browser from reloading the page
    e.preventDefault(); 
    
    // Calls the function from App.jsx to get the pictures
    props.onSearch(searchText);
    
    // Changes the URL to match what we searched for
    navigate(`/search/${searchText}`);
    
    // Clears the search bar
    setSearchText(''); 
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input 
        type="search" 
        name="search" 
        placeholder="Search"
        required
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} 
      />
      <button type="submit" className="search-button">
        <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      </button>
    </form>
  );
};

export default Search;

