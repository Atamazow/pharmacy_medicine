import React from 'react';
import './search.css'

function Search(props) {
    return (
        <div>
            <input className='search_inp' type="text" placeholder='Поиск лекарств...'/>
        </div>
    );
}

export default Search;