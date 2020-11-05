import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DarkModeCheckbox from '../context/theme/DarkModeCheckbox';
import useAccountApis from '../hooks/useAccountApis';
import Account from './Account';
import './AccountPicker.scss';
import Search from './search';

const AccountPicker = ({ accounts }) => {
    const { fetchAccounts } = useAccountApis('1181c201-6faf-4500-9ce2-3acc01bbe47d');
    const loadedAccounts = useSelector(state => state.account.accounts);

    useEffect(() => {
        if (!accounts) {
            fetchAccounts();
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
                elements={accounts || loadedAccounts}
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
    })),
};

AccountPicker.defaultProps = {
    accounts: null,
};

export default AccountPicker;
