import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';

const SearchResultsGroup = ({ name, elements, matchResult, renderResult, sortBy }) => {
    return (
        <>
            <span className="search_group_title">{name.toLowerCase()}</span>
            <SearchResults
                elements={elements}
                matchResult={(element) => matchResult(element)}
                renderResult={renderResult}
                sortyBy={sortBy}
            />
        </>
    )
}

SearchResultsGroup.propTypes = {
    name: PropTypes.string.isRequired,
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
    matchResult: PropTypes.func.isRequired,
    renderResult: PropTypes.func.isRequired,
    sortBy: PropTypes.func,
};

export default SearchResultsGroup
