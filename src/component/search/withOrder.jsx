import React from 'react';

const withOrder = (WrappedSearchResults, sortBy) => {
    const SortedSearchResults = ({ elements, ...props}) => {
        const sortedResults = sortBy ? elements.sort((element1, element2) => sortBy(element1, element2)) : elements;

        return (
            <WrappedSearchResults
                {...props}
                elements={sortedResults}
            />
        )
    };

    return SortedSearchResults;
};

export default withOrder;
