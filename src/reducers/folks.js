import {
    FETCH_FOLKS_SUCCESS,
    FETCH_ID_FOLKS_SUCCESS,
    FETCH_FOLKS_ERROR
} from '../actions/folks';

const initialState = {
    allUsers: {},
    oneUser: {},
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_FOLKS_SUCCESS) {
        return Object.assign({}, state, {
            allUsers: action.allUsers,
            error: null
        });
    } else if (action.type === FETCH_ID_FOLKS_SUCCESS) {
        return Object.assign({}, state, {
            oneUser: action.oneUser,
            error: null
        })
    } else if (action.type === FETCH_FOLKS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}