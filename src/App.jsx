import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import apiKey from './config';

// Importing all the "Lego bricks"
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';

function App() {
  // State that hold the pictures we get back
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [computers, setComputers] = useState([]);
  const [searchedPhotos, setSearchedPhotos] = useState([]);
  
  // State that shows a loading screen while waiting for the interwebsss
  const [loading, setLoading] = useState(true);

  // The function that actually talks to Pixabay
  const fetchData = (query, stateSetter) => {
    setLoading(true); 
    
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&per_page=24&format=json`)
      .then(response => response.json())
      .then(data => {
        stateSetter(data.hits); 
        setLoading(false);   
      })
      .catch(error => console.log("Error fetching data", error));
  };

  // This rubs once when the app opens to get some pictures
  useEffect(() => {
    fetchData('cats', setCats);
    fetchData('dogs', setDogs);
    fetchData('computers', setComputers);
  }, []);

  // This tells search bar where to put cust pictures
  const handleSearch = (query) => {
    fetchData(query, setSearchedPhotos);
  };

  return (
    <div className="container">
      {/* REMEMBER: Search and Nav sit outside Routes so they are ALWAYS on screen */}
      <Search onSearch={handleSearch} />
      <Nav />

      {/* Routes decides what goes in the space below the menu */}
      {loading ? <p>Loading...</p> : (
        <Routes>
          {/* If the URL is "/",bounce to "/computers" */}
          <Route path="/" element={<Navigate to="/cats" />} />
          
          <Route path="/cats" element={<PhotoList data={cats} title="Cats" />} />
          <Route path="/dogs" element={<PhotoList data={dogs} title="Dogs" />} />
          <Route path="/computers" element={<PhotoList data={computers} title="Computers" />} />
          
          {/* Search Route */}
          <Route path="/search/:query" element={<PhotoList data={searchedPhotos} title="Search Results" />} />
          
          {/* 404 Error Route */}
          <Route path="*" element={<h2>404 Error - Page Not Found</h2>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
