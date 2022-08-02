import { useState, useEffect } from 'react'
import $ from 'jquery'

// Takes item data as JSON string and displays each item as a togglable component
const Item = ({item, term}) => {

    const [toggle, setToggle] = useState(true)

    const itemInfo = (<div><div className='line'></div><div className='item-lore'>{item.Lore}</div></div>)

    // // Highlights the search term
    // // Called from useEffect after component is rendered.
    // function highlight() {
    //     // // Get JQuery collection of element objects
    //     // var itemLore = $(this).find('.item-lore').get()
    //     // var loreInnerHTML = itemLore.innerHTML
    //     // console.log(loreInnerHTML)

    //     // g flag looks for all matches, not just first
    //     // i flag is case-insensitive
    //     const regex = new RegExp(term, 'gi')

    //     // // Replace and set new inner HTML
    //     // // $& is a replacement patter that tells the replacer method to insert the matched substring there
    //     var newInnerHTML = item.Lore.replace(regex, "<mark className='highlight'>$&</mark>")
    //     loreInnerHTML.innerHTML = newInnerHTML
    // }

    // useEffect(() => {
    //     highlight()
    // })

    return (
            <div className='item'>
                <div className='item-header'>
                    <a className='item-header-title' target='_blank' rel="noreferrer" href={item.Link}>{item.Name}</a>
                    <button className='toggle-button' onClick={() => setToggle(!toggle)}>
                        {toggle ? <span className='minus-symbol'>-</span> : <span className='plus-symbol'>+</span>}
                    </button>
                </div>
                {toggle && itemInfo}
            </div>
    )
}

export default Item