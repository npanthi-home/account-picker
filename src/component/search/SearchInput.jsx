import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({ onSearch }) => {
    return (
        <input
            type="text"
            className="search_input"
            placeholder="search accounts"
            onChange={(event) => onSearch(event.target.value)}
        />
    )
}

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default SearchInput;

