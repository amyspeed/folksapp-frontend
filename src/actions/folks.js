import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_FOLKS_SUCCESS = 'FETCH_FOLKS_SUCCESS';
export const fetchFolksSuccess = allUsers => ({
    type: FETCH_FOLKS_SUCCESS,
    allUsers
});

export const FETCH_ID_FOLKS_SUCCESS = 'FETCH_ID_FOLKS_SUCCESS';
export const fetchIdFolksSuccess = oneUser => ({
    type: FETCH_ID_FOLKS_SUCCESS,
    oneUser
});

export const FETCH_FOLKS_ERROR = 'FETCH_FOLKS_ERROR';
export const fetchFolksError = error => ({
    type: FETCH_FOLKS_ERROR,
    error
});

export const fetchFolks = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/folks`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((folks) => dispatch(fetchFolksSuccess(folks)))
        .catch(err => {
            dispatch(fetchFolksError(err));
        });
};

export const fetchFolkById = (userId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/folks/${userId}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((oneUsersInfo) => dispatch(fetchIdFolksSuccess(oneUsersInfo)))
        .catch(err => {
            dispatch(fetchFolksError(err));
        });
}

export const PutInfoByUserId = (userId, putData) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/folks/${userId}`, {
        method: 'PUT',
        headers: { 
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(putData)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((userInfo) => dispatch(fetchIdFolksSuccess(userInfo)))
        .catch(err => {
            dispatch(fetchFolksError(err));
        });
};