const useAccountFetcher = () => {

    const fetchAccounts = (username) => {
        return [
            {
                id: '1',
                category: 'facebook',
                username: 'user_1',
                email: 'user_1@facebook.com',
                favorite: false,
                last_accessed: 'abc',
            },
            {
                id: '2',
                category: 'google',
                username: 'user_1',
                email: 'user_1@google.com',
                favorite: false,
                last_accessed: 'abc',
            },
            {
                id: '3',
                category: 'twitter',
                username: 'user_1',
                email: 'user_1@twitter.com',
                favorite: false,
                last_accessed: 'abc',
            }
        ];
    }

    return { fetchAccounts };
};

export default useAccountFetcher;
