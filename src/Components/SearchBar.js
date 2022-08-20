import { useEffect, useState, useRef } from 'react'
import uuid from 'react-uuid'
import lunr from 'lunr'
import $ from 'jquery'

// JSON Imports
import eldenRingDataJSON from '../JSON Data/eldenRingData.json'

// Component Imports
import Results from './Results'

const SearchBar = () => {

    const tempTerm = useRef('')

    // Hold the search term
    const [term, setTerm] = useState('')

    // Hold search results produced by lunr
    const [results, setResults] = useState({})

    // Clean search input so it searches for the entire input exactly
    // Lunr expressions: + means the term must be present.  ~0 means it must be the exact word
    function modifyTerm(searchInput) {
        var text = searchInput
        text = text.trim()
        text = '+' + text
        text = text + '~0'
        text = text.replace(/ /g, '~0 +')

        return text
    }

    const onSubmit = (e) => {
        if (tempTerm.current != '') {
            console.log(tempTerm.current)
            setTerm(tempTerm.current)
            console.log(term)
    
            e.preventDefault()
            
            var tempResults = {}
    
            // Get keys of data, ie. Ammunition, Armor, ..., Tools
            var keys = Object.keys(eldenRingDataJSON)
    
            // For each key in eldenRingDataJSON, search for the term
            for (var i = 0; i < keys.length; i++) {
                // Create lunr index of my JSON data
                const index = lunr(function () {
    
                    // Set fields for search indexing
                    this.ref('Name')
                    this.field('Name')
                    this.field('Link')
                    this.field('Lore')
    
                    // Get JSON object from data
                    var key = eldenRingDataJSON[keys[i]]
    
                    // Loop through JSON data and add items to lunr search index
                    key.forEach(function (doc) {
                        this.add(doc)
                    }, this)
                })
    
                // Modify the term to utilize lunr regex expressions
                var searchTerm = modifyTerm(tempTerm.current)
    
                console.log(searchTerm)
    
                // Find relevant data from lunrResult and build arrays
                var lunrResult = index.search(searchTerm)
    
                // Build a JSON object with the lunr results
                if (lunrResult.length !== 0) {
                    tempResults[keys[i]] = lunrResult
                }
            }
    
            console.log(tempResults)
            setResults(tempResults)
        }
    }

    return (
        <div className='search-header'>
            <form className='search-bar' onSubmit={onSubmit}>
                {/*Search Bar*/}
                <div className='form-control'>
                    <input
                        type='Search'
                        className='search'
                        placeholder='Enter a term'
                        onChange={(e) => (tempTerm.current = e.target.value)}
                    />
                    {/*submit button*/}
                    <input
                        type='submit'
                        value='Search'
                        className='button'
                    />
                </div>
            </form>
            <div>
                {results === [] ? (
                    <div>No Results</div>
                ) : (
                    {/* For each key in results, build a Results component with the data and key pair*/},
                    Object.keys(results).map((JSONkey) => (
                        <Results key={uuid()} result={results[JSONkey]} type={JSONkey} term={term}/>
                    )))}
            </div>
        </div>
    )
}
export default SearchBar