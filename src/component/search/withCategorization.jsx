import React from 'react';
import useGroupBy from './useGroupBy';
import './index.scss';

const withCategorization = (WrappedResults, groupBy) => {
    const CategorizedSearchResults = ({ elements, ...props}) => {
        const { groupBy: group } = useGroupBy();
        const groupedElements = group(elements, groupBy);
        const groupedSearchResults = Object.keys(groupedElements)
            .map((groupName) => {
                return (<div key={groupName} className="search_group">
                    <span className="title">{groupName.toLowerCase()}</span>
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
