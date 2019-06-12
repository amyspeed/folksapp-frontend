import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import folksReducer from './reducers/folks';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer, 
        auth: authReducer,
        folks: folksReducer,
    }),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;