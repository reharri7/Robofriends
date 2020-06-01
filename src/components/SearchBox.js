import React from 'react';
import './SearchBox.css';

const SeacrhBox = ({ searchfield, searchChange }) => {
    return(
        <div className = 'pa3'>
            <input 
                className = 'pa-3 b--green bg-lightest-blue tc searchBox grow'
                type = 'search' 
                placeholder = 'Search Robots'
                onChange={searchChange}
                />
        </div>
    );
}

export default SeacrhBox;