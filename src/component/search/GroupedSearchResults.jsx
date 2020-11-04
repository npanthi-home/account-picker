import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';
import useGroupBy from './useGroupBy';

const GroupedSearchResults = ({ elements, matchResult, renderResult, groupBy, sortBy }) => {
    const { groupBy: group } = useGroupBy();
    const groupedElements = group(elements, groupBy);
    const groupedSearchResults = Object.keys(groupedElements)
        .map((groupName) => {
            return (<div key={groupName}>
                <span className="search_group_title">{groupName.toLowerCase()}</span>
                <SearchResults
                    elements={groupedElements[groupName]}
                    matchResult={(element) => matchResult(element)}
                    renderResult={renderResult}
                    sortyBy={sortBy}
                />
            </div>);
        });

    return (
        <>
            {groupedSearchResults}
        </>
    )
}

GroupedSearchResults.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
    matchResult: PropTypes.func.isRequired,
    renderResult: PropTypes.func.isRequired,
    sortBy: PropTypes.func,
};

export default GroupedSearchResults
