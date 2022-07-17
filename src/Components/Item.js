import { useState } from 'react'

// Takes item data as JSON string and displays each item as a togglable component
const Item = ({item}) => {

    const [toggle, setToggle] = useState(true)

    const itemInfo = (<div>{item.Lore}</div>)
    console.log(item.Lore)

    return (
        <div className='item'>
            <div>
                <a href= {item.Link}>{item.Name}</a>
                <button onClick={() => setToggle(!toggle)}>
                    click me
                </button>
            </div>
            {toggle && itemInfo}

            <br></br>
        </div>
    )
}

export default Item