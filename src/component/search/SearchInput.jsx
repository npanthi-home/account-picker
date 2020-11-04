import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({ onSearch }) => {
    return (
        <input type="text" onChange={(event) => onSearch(event.target.value)} />
    )
}

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default SearchInput;

