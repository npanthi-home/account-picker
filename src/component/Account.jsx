import React from 'react'
import PropTypes from 'prop-types'

const Account = ({ account }) => {
    return (
        <div className="account">
            <span>{account.username}</span>
            <span>{account.email}</span>
        </div>
    );
};

Account.propTypes = {
    account: PropTypes.shape({
        id: PropTypes.string.isRequired,
        category: PropTypes.oneOf(['facebook', 'google', 'twitter', 'unknown']),
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        favorite: PropTypes.bool,
        lastAccessed: PropTypes.number,
    })
};

export default Account;
