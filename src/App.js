import './App.css'

import { useEffect } from 'react'

// Components Imports
import SearchBar from './Components/SearchBar'

function App() {

  // useEffect(() => {

  //   console.log(itemLore)
    
  //   for (var i = 0; i < itemLore.length; i++) {
  //     console.log(itemLore[i])
  //     // if (itemLore !== undefined) {

  //     //   // g flag looks for all matches, not just first
  //     //   // i flag is case-insensitive
  //     //   const regex = new RegExp('blood', 'gi')

  //     //   var text = itemLore.innerHTML

  //     //   // $& is a replacement patter that tells the replacer method to insert the matched substring there
  //     //   const newText = text.replace(regex, "<mark className='highlight'>$&</mark>")
  //     //   itemLore.innerHTML = newText
  //     // }
  //   }
  // })

  return (
    <div className='container'>
      {<SearchBar />}
    </div>
  );
}

export default App;