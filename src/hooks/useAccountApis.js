import axios from 'axios';

const useAccountApis = (ownerId) => {
    const fetchAccounts = (callback) => {
        axios({
            url: `http://localhost:8000/account/owner/${ownerId}`,
            method: 'GET',
        }).then((response) => {
            callback(response.data);
        })
    };

    const markFavorite = (account, callback) => {
        const favoriteStatus = !account.favorite;
        axios({
            url: `http://localhost:8000/account/favorite/${favoriteStatus}`,
            method: 'PUT',
            data: account,
        }).then((response) => {
            account.favorite = response.data.favorite || account.favorite;
            callback && callback(response.data);
        })
    };

    const accessAccount = (account, callback) => {
        axios({
            url: `http://localhost:8000/account`,
            method: 'PUT',
            data: account,
        }).then((response) => {
            account.lastAccessed = response.data.lastAccessed || account.lastAccessed;
            callback && callback(response.data);
        })
    };

    const createNewAccount = (account, callback) => {
        axios({
            url: `http://localhost:8000/account`,
            method: 'POST',
            data: account,
        }).then((response) => {
            callback(response.data);
        })
    };

    return { fetchAccounts, markFavorite, accessAccount, createNewAccount };
};

export default useAccountApis;
