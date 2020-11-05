import axios from 'axios';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AccountActions from '../state/action/account.action';

const useAccountApis = (ownerId) => {
    const dispatch = useDispatch();
    const actions =  bindActionCreators({ ...AccountActions }, dispatch);

    const fetchAccounts = () => {
        axios({
            url: `http://localhost:8000/account/owner/${ownerId}`,
            method: 'GET',
        }).then((response) => {
            actions.fetchAll(response.data);
        })
    };

    const markFavorite = (account) => {
        const favoriteStatus = !account.favorite;
        axios({
            url: `http://localhost:8000/account/favorite/${favoriteStatus}`,
            method: 'PUT',
            data: account,
        }).then((response) => {
            actions.markFavorite(response.data);
        })
    };

    const accessAccount = (account) => {
        axios({
            url: `http://localhost:8000/account/access`,
            method: 'PUT',
            data: account,
        }).then((response) => {
            actions.access(response.data);
        })
    };

    const createNewAccount = (account, callback) => {
        axios({
            url: `http://localhost:8000/account`,
            method: 'POST',
            data: {
                ...account,
                ownerId,
            },
        }).then((response) => {
            actions.create(response.data);
        })
    };

    return { fetchAccounts, markFavorite, accessAccount, createNewAccount };
};

export default useAccountApis;
