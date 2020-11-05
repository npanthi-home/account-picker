import { ACCESS, CREATE, FETCH_ALL, MARK_FAVORITE } from '../action/account.action';

export const initialState = {
    accounts: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL: {
            return { 
                ...state,
                accounts: action.accounts,
            };
        }

        case MARK_FAVORITE:
        case ACCESS: {
            const remainingAccounts = state.accounts.filter((account) => account.id !== action.account.id);
            return { 
                ...state,
                accounts: [
                    ...remainingAccounts,
                    action.account,
                ],
            };
        }

        case CREATE: {
            return { 
                ...state,
                accounts: [
                    ...state.accounts,
                    action.account,
                ],
            };
        }

        default: 
            return state;
    }
}