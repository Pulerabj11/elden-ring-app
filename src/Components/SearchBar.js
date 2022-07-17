import { useState } from 'react'
import uuid from 'react-uuid'
import lunr from 'lunr'

// JSON Imports
import eldenRingDataJSON from '../JSON Data/eldenRingData.json'

// Component Imports
import Results from './Results'

const SearchBar = () => {


    const [term, setTerm] = useState('')

    // State control to hold search results produced by lunr
    const [results, setResults] = useState([])

    const onSubmit = (e) => {

        e.preventDefault()

        //Check if there is text added to the task input
        if (!term) {
            alert('Please add a search term.')
            return
        }

        var tempResults = []
        var tempTypes = []

        // Get keys of data, ie. Ammunition, Armor, ..., Tools
        var keys = Object.keys(eldenRingDataJSON)

        for (var i = 0; i < keys.length; i++) {
            // Create lunr index of my JSON data
            const index = lunr(function () {

                // Set fields for search indexing
                this.ref('Name')
                this.field('Link')
                this.field('Lore')

                // Get JSON object from data
                var key = eldenRingDataJSON[keys[i]]
                console.log('Type: ' + keys[i])

                // Loop through JSON data and add items to lunr search index
                key.forEach(function (doc) {
                    this.add(doc)
                }, this)
            })

            // Find relevant data from lunrResult and build arrays
            var lunrResult = index.search(term)

            if (lunrResult.length !== 0) {
                tempResults.push(lunrResult)
                tempTypes.push(keys[i])
            }
        }

        // Add type property to each item in tempResults JSON objects
        for (var x=0; x<tempResults.length; x++) {
            for (var y=0; y<tempResults[x].length; y++) {
                tempResults[x][y].type = tempTypes[x]
            }
        }

        setResults(tempResults)
    }

    return (
        <div className='search-header'>
            <form className='search-bar' onSubmit={onSubmit}>
                {/*Search Bar*/}
                <div className='form-control'>
                    <input
                        type='Search'
                        placeholder='Enter a term'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                    {/*submit button*/}
                    <input
                        type='submit'
                        value='Search'
                        className='btn btn-block'
                    />
                </div>
            </form>
            <div>
                {results === [] ? (
                    'No Results'
                ) : (
                    results.map((result) => (

                    <Results key={uuid()} result={result}/>
                )))}
            </div>
        </div>
    )
}
export default SearchBar