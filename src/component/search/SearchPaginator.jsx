import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import usePaginator from './usePaginator';
import GroupedSearchResults from './GroupedSearchResults';
import SearchResults from './SearchResults';

const PaginatedResults = ({ pageSize, elements, matchResult, renderResult, groupBy, sortBy }) => {
    const { getPageElements, hasNext, next, hasPrevious, previous } = usePaginator(elements, pageSize);

    return (
        <>
            {
                groupBy
                    ? (<GroupedSearchResults
                        elements={getPageElements()}
                        matchResult={matchResult}
                        renderResult={renderResult}
                        groupBy={groupBy}
                        sortBy={sortBy}
                    />)
                    : (<SearchResults
                        elements={getPageElements()}
                        matchResult={matchResult}
                        renderResult={renderResult}
                        sortBy={sortBy}
                    />)
            }
            <FontAwesomeIcon icon={faLessThan} onClick={previous} />
            <FontAwesomeIcon icon={faGreaterThan} onClick={next} />
        </>
    )
}

PaginatedResults.propTypes = {

};

export default PaginatedResults;
