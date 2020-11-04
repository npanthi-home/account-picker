import React from 'react';

const withOrder = (WrappedResults, sortBy) => {
    const SortedSearchResults = ({ elements, ...props}) => {
        const sortedResults = sortBy ? elements.sort((element1, element2) => sortBy(element1, element2)) : elements;

        return (
            <WrappedResults
                {...props}
                elements={sortedResults}
            />
        )
    };

    return SortedSearchResults;
};

export default withOrder;
