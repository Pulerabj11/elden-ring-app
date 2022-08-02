// Component Imports
import Item from './Item'
import uuid from 'react-uuid'

import { useState } from 'react'

// JSON Imports
import eldenRingDataJSON from '../JSON Data/eldenRingData.json'

// Gets item names from lunr results and checks them against my JSON data. Then call onAdd={addTask}
const Results = ({result, type, term}) => {

    const [toggle, setToggle] = useState(true)

    var items = []

    // Get keys of data, ie. Ammunition, Armor, ..., Tools
    var keys = Object.keys(eldenRingDataJSON)

    for (var x = 0; x < Object.keys(result).length; x++) {
        for (var y = 0; y < keys.length; y++) {
            const category = eldenRingDataJSON[keys[y]]  // Category is a group of items of a certain type
            for (var z = 0; z < category.length; z++) {
                if (category[z]['Name'] === result[x]['ref']) {
                    items.push({ 'Name': category[z]['Name'], 'Lore': category[z]['Lore'], 'Link': category[z]['Link'] })
                }
            }
        }
    }

    return (
        <div className='results-category'>
            <div className='category-header'>
                <div className='category'>{type}</div>
                <button className='category-toggle-button' onClick={() => setToggle(!toggle)}>
                        {toggle ? <span className='category-minus-symbol'>-</span> : <span className='category-plus-symbol'>+</span>}
                </button>
            </div>
            {items.map((item) => (
                toggle && <Item key={uuid()} item={item} term={term}/>
            ))}
        </div>
    )
}

export default Results