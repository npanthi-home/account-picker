import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import PaginatedResults from './SearchPaginator';

const Search = ({ elements, matchResult, renderResult, groupBy, sortBy }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const resultMatcher =  (element) => matchResult(searchKeyword, element);

    return (
        <>
            <SearchInput onSearch={(keyword) => setSearchKeyword(keyword)} />
            <PaginatedResults
                pageSize={3}
                elements={elements}
                matchResult={resultMatcher}
                renderResult={renderResult}
                groupBy={groupBy}
                sortBy={sortBy}
            />
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

