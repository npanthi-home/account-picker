import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ elements, matchResult, renderResult }) => {
    const results = elements
        .filter((element) => matchResult(element))
        .map((element) => renderResult(element));

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
};

export default SearchResults;

