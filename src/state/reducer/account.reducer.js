import { ACCESS, CREATE, FETCH_ALL, MARK_FAVORITE } from '../action/account.action';

export const initialState = {
    accounts: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL: {
            return { 
                ...initialState,
                accounts: action.accounts,
            };
        }

        case MARK_FAVORITE:
        case ACCESS: {
            const remainingAccounts = initialState.accounts.filter((account) => account.id !== action.account.id);
            return { 
                ...initialState,
                accounts: [
                    ...remainingAccounts,
                    action.account,
                ],
            };
        }

        case CREATE: {
            return { 
                ...initialState,
                accounts: [
                    ...initialState.accounts,
                    action.account,
                ],
            };
        }

        default: 
            return initialState;
    }
}