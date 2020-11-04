import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import usePaginator from './usePaginator';

const withPagination = (WrappedResults, pageSize) => {

    const PaginatedResults = ({ elements, ...props }) => {
        const { getPageElements, hasNext, next, hasPrevious, previous } = usePaginator(elements, pageSize);

        return (
            <>
                <WrappedResults
                    {...props}
                    elements={getPageElements()}
                />
                <FontAwesomeIcon icon={faLessThan} onClick={previous} />
                <FontAwesomeIcon icon={faGreaterThan} onClick={next} />
            </>
        );
    };

    return PaginatedResults;
}

export default withPagination;
