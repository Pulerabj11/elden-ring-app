import './App.css';
import lunr from 'lunr'
import { useState } from 'react'

// JSON Imports
import ammunitionJSON from './JSON Data/ammunition.json'

// Components Imports
import SearchBar from './Components/SearchBar'
import Results from './Components/Results'

function App() {

  const [results, setResults] = useState([])

  var lunrResult = []

  var idx = lunr(function () {
    this.ref('Name')
    this.field('Link')
    this.field('Lore')
  
    ammunitionJSON.forEach(function (doc) {
      this.add(doc)
    }, this)
  })

  const performSearch = (term) => {
    lunrResult = idx.search(term)
    setResults(lunrResult)
  }

  return (
    <div className='container'>
      {<SearchBar onSearch={performSearch}/>}
      {results === [] ? (
        'No Results'
        ) : (
          <Results results={results}/>
      )}
    </div>
  );
}

export default App;