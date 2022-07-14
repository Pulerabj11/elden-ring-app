import './App.css'
import { useState, useEffect } from 'react';
// Components Imports
import SearchBar from './Components/SearchBar'

function App() {

  return (
    <div className='container'>
      {<SearchBar/>}
    </div>
  );
}

export default App;