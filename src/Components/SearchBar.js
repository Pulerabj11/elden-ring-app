import { useState } from 'react'
import lunr from 'lunr'

// JSON Imports
import ammunitionJSON from '../JSON Data/ammunition.json'

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

        // Create lunr index of my JSON data
        const index = lunr(function () {
            this.ref('Name')
            this.field('Link')
            this.field('Lore')


            ammunitionJSON.forEach(function (doc) {
                this.add(doc)
            }, this)
        })

        var lunrResult = index.search(term)
        setResults(lunrResult)
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
            {results === [] ? (
                'No Results'
            ) : (
                <Results results={results} />
            )}
        </div>
    )

}
export default SearchBar