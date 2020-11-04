import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ elements, matchResult, renderResult, sortBy }) => {

    const sortedResults = sortBy ? elements.sort((element1, element2) => sortBy(element1, element2)) : elements;

    const results = sortedResults
        .filter((result) => matchResult(result))
        .map((result) => renderResult(result));

    return (
        <>
            { results}
        </>
    );
};

SearchResults.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
    matchResult: PropTypes.func.isRequired,
    renderResult: PropTypes.func.isRequired,
    groupBy: PropTypes.func,
    sortBy: PropTypes.func,
};

export default SearchResults;

