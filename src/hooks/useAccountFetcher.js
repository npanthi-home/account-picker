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
                category: 'facebook',
                username: 'user_2',
                email: 'user_2@facebook.com',
                favorite: false,
                last_accessed: 'abc',
            },
            {
                id: '3',
                category: 'facebook',
                username: 'user_3',
                email: 'user_3@facebook.com',
                favorite: false,
                last_accessed: 'abc',
            },
            {
                id: '4',
                category: 'google',
                username: 'user_1',
                email: 'user_1@google.com',
                favorite: false,
                last_accessed: 'abc',
            },
            {
                id: '5',
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
