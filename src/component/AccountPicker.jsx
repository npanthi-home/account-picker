import React from 'react'
import PropTypes from 'prop-types'
import Account from './Account'

const AccountPicker = ({ accounts }) => {
    const accountElements = accounts.map((account) => <Account account={account} />);

    return (
        <div>
            {accountElements}
        </div>
    );
};

AccountPicker.propTypes = {
    accounts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        category: PropTypes.oneOf(['facebook', 'google', 'twitter']),
        username: PropTypes.string,
        email: PropTypes.string,
        favorite: PropTypes.bool,
        lastAccessed: PropTypes.number,
    })),
};

export default AccountPicker;
