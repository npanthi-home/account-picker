import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import SearchResultsGroup from './SearchResultsGroup';

const Search = ({ elements, matchResult, renderResult, groupBy, sortBy }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const searchResultGroups = elements.reduce((groups, element) => {
        const groupName = element[groupBy] || 'others';
        if (!groups[groupName]) {
            groups[groupName] = [];
        }
        groups[groupName].push(element);
        return groups;
    }, {});

    const searchResultGroupElements = Object.keys(searchResultGroups).map(groupName => {
        return (<SearchResultsGroup
            name={groupName}
            key={groupName}
            elements={searchResultGroups[groupName]}
            matchResult={(element) => matchResult(searchKeyword, element)}
            renderResult={renderResult}
            sortyBy={sortBy}
        />);
    })

    return (
        <>
            <SearchInput onSearch={(keyword) => setSearchKeyword(keyword)} />
            {searchResultGroupElements}
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

