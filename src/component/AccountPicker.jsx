import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Account from './Account';
import Search from './search';
import './AccountPicker.scss';
import DarkModeCheckbox from '../context/theme/DarkModeCheckbox';
import useAccountApis from '../hooks/useAccountApis';

const AccountPicker = ({ accounts }) => {
    const { fetchAccounts } = useAccountApis('1181c201-6faf-4500-9ce2-3acc01bbe47d');
    const [loadedAccounts, setLoadedAccounts] = useState([]);
    
    useEffect(() => {
        if (accounts && accounts.length > 0) {
            setLoadedAccounts(accounts);
        } else {
            fetchAccounts((accounts) => setLoadedAccounts(accounts));
        }
    }, [accounts]);

    const renderAccount = (account) => <Account key={account.id} account={account} />;
    const matchAccount = (keyword, account) => {
        return account.email.includes(keyword) || account.username.includes(keyword);
    }
    const lastAccessedComparator = (account1, account2) => account1.lastAccessed - account2.lastAccessed;

    return (
        <div className="account_picker">
            <span className="heading">Choose an account</span>
            <DarkModeCheckbox />
            <Search
                elements={loadedAccounts}
                renderResult={renderAccount}
                matchResult={matchAccount}
                groupBy='category'
                sortBy={lastAccessedComparator}
                pageSize={3}
            />
        </div>
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
