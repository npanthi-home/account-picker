import React from 'react';

const withSearchFilter = (WrappedResults, matchResult) => {
    const SearchedResults = ({ elements, ...props}) => {
        const searchedResults = elements.filter((element) => matchResult(element));

        return (
            <WrappedResults
                {...props}
                elements={searchedResults}
            />
        )
    };

    return SearchedResults;
};

export default withSearchFilter;
