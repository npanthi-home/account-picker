export const FETCH_ALL = 'account.FETCH_ALL';
export const MARK_FAVORITE = 'account.MARK_FAVORITE';
export const ACCESS = 'account.ACCESS';
export const CREATE = 'account.CREATE';

export const fetchAll = (accounts) => {
    return { type: FETCH_ALL, accounts };
};

export const markFavorite = (account) => {
    return { type: MARK_FAVORITE, account };
};

export const access = (account) => {
    return { type: ACCESS, account };
};

export const create = (account) => {
    return { type: CREATE, account };
};