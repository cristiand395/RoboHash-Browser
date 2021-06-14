import React from 'react';
import './SearchBox.styles.css'

export const SearchBox = ({ handleSearch, placeholder }) => {
    return(
        <input 
            className='search'
            type="search" 
            onChange={handleSearch} 
            placeholder={placeholder}/>
    )
}