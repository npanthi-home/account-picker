import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

const Search = ({ elements, matchResult, renderResult }) => {
    const [searchKeyword, setSearchKeyword] = useState('');

    return (
        <>
            <SearchInput onSearch={(keyword) => setSearchKeyword(keyword)} />
            <SearchResults
                elements={elements}
                matchResult={(element) => matchResult(searchKeyword, element)}
                renderResult={renderResult}
            />
        </>
    );
};

Search.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
    matchResult: PropTypes.func.isRequired,
    renderResult: PropTypes.func.isRequired,
};

export default Search;

