// Component Imports
import Item from './Item'

// JSON Imports
import ammunitionJSON from '../JSON Data/ammunition.json'


// Gets item names from lunr results and checks them against my JSON data. Then call onAdd={addTask}
const Results = ({results}) => {

    var items = []

    console.log(Object.keys(results).length)
    console.log(Object.keys(ammunitionJSON).length)
    for (var x = 0; x < Object.keys(results).length; x++) {
        for (var y = 0; y < Object.keys(ammunitionJSON).length; y++) {
            if (ammunitionJSON[y]['Name'] === results[x]['ref']) {
                items.push(ammunitionJSON[y]['Name'], ammunitionJSON[y]['Lore'], ammunitionJSON[y]['Link'])
            }
        }
    } 

    return (
        <div>
            {items.map((item, id) => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default Results