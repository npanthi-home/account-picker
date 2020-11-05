import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmtpy } from '@fortawesome/free-regular-svg-icons';
import './Account.scss';
import { ThemeContext } from '../context/theme/ThemeContext';
import useAccountApis from '../hooks/useAccountApis';

const Account = ({ account }) => {
    const { theme } = useContext(ThemeContext);
    const { markFavorite, accessAccount } = useAccountApis('1181c201-6faf-4500-9ce2-3acc01bbe47d');

    return (
        <div className={`account ${theme}`}>
            <div className="main">
                <span className="username">{account.username}</span>
                <span className="email">{account.email}</span>
                {/* <span className="lastAccessed">{account.lastAccessed}</span> */}
            </div>
            <div className="sidePanel">
                <FontAwesomeIcon
                    icon={account.favorite ? faStar : faStarEmtpy}
                    onClick={() => markFavorite(account)}
                />
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
