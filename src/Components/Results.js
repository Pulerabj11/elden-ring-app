// Component Imports
import Item from './Item'
import uuid from 'react-uuid'

// JSON Imports
import eldenRingDataJSON from '../JSON Data/eldenRingData.json'

// Gets item names from lunr results and checks them against my JSON data. Then call onAdd={addTask}
const Results = ({ result }) => {
    var items = []

    console.log(result)
    console.log(eldenRingDataJSON)
    // Get keys of data, ie. Ammunition, Armor, ..., Tools
    var keys = Object.keys(eldenRingDataJSON)

    console.log(eldenRingDataJSON[keys[0]][0]['Name'])
    console.log(result[0]['ref'])

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

    console.log(items)
    return (
        <div>
            {items.map((item) => (
                <Item key={uuid()} item={item} />
            ))}
        </div>
    )
}

export default Results