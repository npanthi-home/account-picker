import { combineReducers } from 'redux';
import { reducer as accountReducer } from './account.reducer'

const reducers = combineReducers({
    account: accountReducer,
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;