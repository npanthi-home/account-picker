import React from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmtpy } from '@fortawesome/free-regular-svg-icons';

const Account = ({ account }) => {
    return (
        <div className="account">
            <span>{account.username}</span>
            <span>{account.email}</span>
            <FontAwesomeIcon icon={account.favorite ? faStar : faStarEmtpy} />
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
