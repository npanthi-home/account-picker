const { useState } = require("react");

const usePaginator = (elements, pageSize) => {
    const [currentPageNumber, setCurrentPageNumber] = useState(0);

    const getPageElements = () => {
        return elements.slice(currentPageNumber * pageSize, currentPageNumber * pageSize + pageSize);
    }

    const hasNext = () => {
        return currentPageNumber < (elements.length / pageSize);
    }

    const next = () => {
        if(hasNext()) {
            setCurrentPageNumber(currentPageNumber + 1);
        }
    };

    const hasPrevious = () => {
        return currentPageNumber > 0;
    }

    const previous = () => {
        if(hasPrevious()) {
            setCurrentPageNumber(currentPageNumber - 1);
        }
    };

    return { getPageElements, hasNext, next, hasPrevious, previous };
};

export default usePaginator;
