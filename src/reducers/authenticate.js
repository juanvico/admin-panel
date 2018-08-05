import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/types';

export const initialState = {
    errorMessage: '',
    isLoading: false,
    recoverPasswordMessage: '',
    user: null,
    token: ''
}
export default function repos(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                errorMessage: '',
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                errorMessage: action.payload.error,
                isLoading: false,
            }
        default:
            return state;
    }
}
