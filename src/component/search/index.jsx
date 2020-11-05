import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import withPagination from './withPagination';
import Results from './Results';
import withCategorization from './withCategorization';
import withOrder from './withOrder';
import withSearchFilter from './withSearchFilter';
import './index.scss';

const Search = ({ elements, matchResult, renderResult, groupBy, sortBy, pageSize }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const match = (element) => matchResult(searchKeyword, element);
    
    const CategorizedResults = withCategorization(Results, groupBy);
    const PaginatedResults = withPagination(CategorizedResults, pageSize);
    const SortedResults = withOrder(PaginatedResults, sortBy);
    const SearchedResults = withSearchFilter(SortedResults, match)

    return (
        <div className="search">
            <SearchInput onSearch={(keyword) => setSearchKeyword(keyword)} />
            <SearchedResults 
                elements={elements}
                matchResult={match}
                renderResult={renderResult}
                sortBy={sortBy} 
            />
        </div>
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

