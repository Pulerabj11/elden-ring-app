import { useState } from 'react'

const SearchBar = ({onSearch}) => {
    const [term, setTerm] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        //Check if there is text added to the task input
        if (!term) {
            alert('Please add a search term.')
            return
        }

          onSearch(term)
    }
    return (
        <form className='search-bar' onSubmit={onSubmit}>
            {/*Search Bar*/}
            <div className='form-control'>
                <input
                    type='search'
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
    )

}
export default SearchBar