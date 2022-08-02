import { useState, useEffect, useRef } from 'react'

// Takes item data as JSON string and displays each item as a togglable component
const Item = ({item, term}) => {

    const [toggle, setToggle] = useState(true)

    // React hook to reference this element
    const loreElement = useRef()

    const itemInfo = (<div>
            <div className='line'></div>
            <div className='item-lore' ref={loreElement}>{item.Lore}</div>
        </div>)

    // Highlights the search term
    // Called from useEffect after component is rendered.
    function highlight() {
        // If element exists, get the inner html and highlight the search term within
        if (loreElement.current !== undefined && loreElement.current !== null) {

            //get inner html of the lore element
            var loreInnerHTML = loreElement.current.innerHTML

            // g flag looks for all matches, not just first
            // i flag is case-insensitive
            const regex = new RegExp(term, 'gi')

            // Replace and set new inner HTML of lore element
            // $& is a replacement patter that tells the replacer method to insert the matched substring
            var newInnerHTML = loreInnerHTML.replace(regex, "<mark className='highlight'>$&</mark>")
            loreElement.current.innerHTML = newInnerHTML
        }
    }

    useEffect(() => {
        highlight()
    })

    return (
            <div className='item'>
                <div className='item-header'>
                    <a className='item-header-title' target='_blank' rel="noreferrer" href={item.Link}>{item.Name}</a>
                    <button className='item-toggle-button' onClick={() => setToggle(!toggle)}>
                        {toggle ? <span className='item-minus-symbol'>-</span> : <span className='item-plus-symbol'>+</span>}
                    </button>
                </div>
                {toggle && itemInfo}
            </div>
    )
}

export default Item