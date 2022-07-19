import { useState } from 'react'

// Takes item data as JSON string and displays each item as a togglable component
const Item = ({ item }) => {

    const [toggle, setToggle] = useState(true)

    const itemInfo = (<div><div className='line'></div><div className='item-lore'>{item.Lore}</div></div>)

    return (
            <div className='item'>
                <div className='item-header'>
                    <a className='item-header-title' target='_blank' href={item.Link}>{item.Name}</a>
                    <button className='toggle-button' onClick={() => setToggle(!toggle)}>
                        {toggle ? <span>-</span> : <span>+</span>}
                    </button>
                </div>
                {toggle && itemInfo}
            </div>
    )
}

export default Item