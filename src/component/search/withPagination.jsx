import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import usePaginator from './usePaginator';

const withPagination = (WrappedResults, pageSize) => {

    const PaginatedResults = ({ elements, ...props }) => {
        const { getPageElements, hasNext, next, hasPrevious, previous } = usePaginator(elements, pageSize);

        return (
            <>
                <div className="search_results">
                    <WrappedResults
                        {...props}
                        elements={getPageElements()}
                    />
                </div>
                <div className="search_results_navigation">
                    <FontAwesomeIcon icon={faLessThan} className="navigation_button" onClick={previous} />
                    <FontAwesomeIcon icon={faGreaterThan} className="navigation_button" onClick={next} />
                </div>
            </>
        );
    };

    return PaginatedResults;
}

export default withPagination;
