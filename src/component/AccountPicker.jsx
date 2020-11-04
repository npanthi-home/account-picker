import PropTypes from 'prop-types';
import React from 'react';
import Account from './Account';
import Search from './search';

const AccountPicker = ({ accounts }) => {
    const renderAccount = (account) => <Account key={account.id} account={account} />;
    const matchAccount = (keyword, account) => {
        return account.email.includes(keyword) || account.username.includes(keyword);
    }
    const lastAccessedComparator = (account1, account2) => account1.lastAccessed - account2.lastAccessed;

    return (
        <>
            <Search
                elements={accounts}
                renderResult={renderAccount}
                matchResult={matchAccount}
                groupBy='category'
                sortBy={lastAccessedComparator}
            />
        </>
    );
};

AccountPicker.propTypes = {
    accounts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        category: PropTypes.oneOf(['facebook', 'google', 'twitter', 'others']),
        username: PropTypes.string,
        email: PropTypes.string,
        favorite: PropTypes.bool,
        lastAccessed: PropTypes.number,
    })).isRequired,
};

export default AccountPicker;
