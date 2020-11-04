import PropTypes from 'prop-types';
import React from 'react';
import Account from './Account';
import Search from './search';

const AccountPicker = ({ accounts }) => {
    const renderAccount = (account) => <Account key={account.id} account={account} />;
    const matchAccount = (keyword, account) => {
        return account.email.includes(keyword) || account.username.includes(keyword);
    }

    return (
        <>
            <Search
                elements={accounts}
                renderResult={renderAccount}
                matchResult={matchAccount} 
            />
        </>
    );
};

AccountPicker.propTypes = {
    accounts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        category: PropTypes.oneOf(['facebook', 'google', 'twitter', 'unknown']),
        username: PropTypes.string,
        email: PropTypes.string,
        favorite: PropTypes.bool,
        lastAccessed: PropTypes.number,
    })).isRequired,
};

export default AccountPicker;
