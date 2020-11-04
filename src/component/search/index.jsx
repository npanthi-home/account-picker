import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import withPagination from './withPagination';
import SearchResults from './SearchResults';
import withCategorization from './withCategorization';
import withOrder from './withOrder';

const Search = ({ elements, matchResult, renderResult, groupBy, sortBy, pageSize }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const match = (element) => matchResult(searchKeyword, element);

    const SortedResults = withOrder(SearchResults, sortBy);
    const CategorizedResults = withCategorization(SortedResults, groupBy);
    const PaginatedResults = withPagination(CategorizedResults, pageSize);

    return (
        <>
            <SearchInput onSearch={(keyword) => setSearchKeyword(keyword)} />
            <PaginatedResults 
                elements={elements}
                matchResult={match}
                renderResult={renderResult}
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

