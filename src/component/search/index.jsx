import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GroupedSearchResults from './GroupedSearchResults';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const Search = ({ elements, matchResult, renderResult, groupBy, sortBy }) => {
    const [searchKeyword, setSearchKeyword] = useState('');

    return (
        <>
            <SearchInput onSearch={(keyword) => setSearchKeyword(keyword)} />
            {
                groupBy
                    ? (<GroupedSearchResults
                        elements={elements}
                        matchResult={(element) => matchResult(searchKeyword, element)}
                        renderResult={renderResult}
                        groupBy={groupBy}
                        sortyBy={sortBy}
                    />)
                    : (<SearchResults
                        elements={elements}
                        matchResult={(element) => matchResult(searchKeyword, element)}
                        renderResult={renderResult}
                        sortyBy={sortBy}
                    />)
            }
        </>
    );
};

Search.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
    matchResult: PropTypes.func.isRequired,
    renderResult: PropTypes.func.isRequired,
    groupBy: PropTypes.string,
    sortBy: PropTypes.func,
};

export default Search;

