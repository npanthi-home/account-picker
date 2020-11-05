import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import DarkModeCheckbox from '../context/theme/DarkModeCheckbox';
import useAccountApis from '../hooks/useAccountApis';
import Account from './Account';
import './AccountPicker.scss';
import Search from './search';
import NewAccountForm from './form/account/NewAccountForm';

const AccountPicker = ({ accounts }) => {
    const { fetchAccounts, createNewAccount } = useAccountApis('1181c201-6faf-4500-9ce2-3acc01bbe47d');
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
    const lastAccessedComparator = (account1, account2) => account2.lastAccessed - account1.lastAccessed;

    return (
        <div className="account_picker">
            <span className="heading">Choose an account</span>
            <div className="actions">
                <div className="dark_check">
                    <DarkModeCheckbox />
                </div>
                <div className="new_account">
                    <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => createNewAccount()}
                    />
                </div>
            </div>
            <Search
                elements={accounts || loadedAccounts}
                renderResult={renderAccount}
                matchResult={matchAccount}
                groupBy='category'
                sortBy={lastAccessedComparator}
                pageSize={3}
            />
            <NewAccountForm />
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
