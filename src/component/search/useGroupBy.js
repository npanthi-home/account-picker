const useGroupBy = () => {
    const groupBy = (elements, field) =>  elements.reduce((groups, element) => {
        const groupName = element[field] || 'others';
        if (!groups[groupName]) {
            groups[groupName] = [];
        }
        groups[groupName].push(element);
        return groups;
    }, {});

    return { groupBy };
}

export default useGroupBy;