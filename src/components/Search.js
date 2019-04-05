import React, { useState } from 'react';
const Search = (props) => {
    const [ searchValue, setSearchValue ] = useState("");
    const handleSearchInputChange = (evt) => {
        setSearchValue(evt.target.value)
    };
    const resetInputField = () => {
        setSearchValue("")
    };
    const callSearchFunction = (evt) => {
        evt.preventDefault();
        props.search(searchValue);
        resetInputField();
    };
    return(
        <form className="search">
            <input value={searchValue} onChange={handleSearchInputChange} type="text" />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
};
export default Search;