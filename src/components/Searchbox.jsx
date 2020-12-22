import React, { useState } from 'react';
import emojipedia from '../emojipedia';
import Entry from './Entry';

function Search(){

    const [searchEmoji, setSearchEmoji] = useState(emojipedia);
    const [sortedList, setSortedList] = useState([]);
    const [searched, setSearched] = useState(true);

    function createEmojiCard(card){
            return <Entry 
                       key ={card.id}
                       img = {card.emoji}
                       name = {card.name}
                       markdown = {card.markdown}
                   ></Entry>  
    }


    function handleChange(e){
        const searchItem = e.target.value;

        searchItem === '' ? setSearched(true): setSearched(false);
               
        setSearchEmoji(searchItem);

        setSortedList(emojipedia.filter(emoji => emoji.markdown.toLowerCase().indexOf(searchEmoji) >= 0
                                                 || emoji.name.toLowerCase().indexOf(searchEmoji) >= 0))

    }
    
    return(

        <div>
            <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                onChange={handleChange}
            />

        </div>

         <div className="dictionary">
            {sortedList.map(createEmojiCard)}
            {
            searched ? (
                emojipedia.map(createEmojiCard)
            ) : null
        }

        </div> 
       
        </div>
       
    )
}

export default Search;

