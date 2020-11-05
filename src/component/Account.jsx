import React from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmtpy } from '@fortawesome/free-regular-svg-icons';
import './Account.scss';

const Account = ({ account }) => {
    return (
        <div className="account">
            <div className="main">
                <span className="username">{account.username}</span>
                <span className="email">{account.email}</span>
                {/* <span className="lastAccessed">{account.lastAccessed}</span> */}
            </div>
            <div className="sidePanel">
                <FontAwesomeIcon icon={account.favorite ? faStar : faStarEmtpy} />
            </div>
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
