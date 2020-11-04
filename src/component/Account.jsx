import React from 'react'
import PropTypes from 'prop-types'

const Account = ({ account }) => {
    return (
        <div>
            <span>{account.username}</span>
            <span>{account.email}</span>
        </div>
    );
};

Account.propTypes = {
    id: PropTypes.string,
    category: PropTypes.oneOf(['facebook', 'google', 'twitter']),
    username: PropTypes.string,
    email: PropTypes.string,
    favorite: PropTypes.bool,
    lastAccessed: PropTypes.number,
};

export default Account;
