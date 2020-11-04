import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ elements, renderResult }) => {
    const results = elements
        .map((element) => renderResult(element));

    return (
        <>
            { results}
        </>
    );
};

Results.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
    matchResult: PropTypes.func.isRequired,
    renderResult: PropTypes.func.isRequired,
};

export default Results;

