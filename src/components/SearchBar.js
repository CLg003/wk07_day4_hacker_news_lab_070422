import React from "react";

const SearchBar = ({stories, handleSearch}) => {

    const onChange = (event) => {
        handleSearch(event.target.value);
    }

    return (
        <div className="search">
            <label id="search-label">Search</label>
            <input type="text" onChange={onChange} />
        </ div>
    );
}

export default SearchBar;