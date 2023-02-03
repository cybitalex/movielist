import './App.css';
import React from "react";
import Header from './components/Header';
import SearchBar from './components/Searchbar';


function App() {
  return (
	  <>
	  	<h1 className="titleOfSite">Movies List</h1>
      <Header />
      <SearchBar />
	  </>
  );
}

export default App;
