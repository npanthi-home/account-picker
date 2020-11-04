import React from 'react';
import useGroupBy from './useGroupBy';

const withCategorization = (WrappedResults, groupBy) => {
    const CategorizedSearchResults = ({ elements, ...props}) => {
        const { groupBy: group } = useGroupBy();
        const groupedElements = group(elements, groupBy);
        const groupedSearchResults = Object.keys(groupedElements)
            .map((groupName) => {
                return (<div key={groupName}>
                    <span className="search_group_title">{groupName.toLowerCase()}</span>
                    <WrappedResults
                        {...props}
                        elements={groupedElements[groupName]}
                    />
                </div>);
            });

        return (
            <>
                {groupedSearchResults}
            </>
        )
    };

    return CategorizedSearchResults;
};

export default withCategorization;
