import * as types from './types';
import axios from 'axios';
import * as services from '../services';



export const mailPassLogin = (email, password, callback) => async (dispatch) => {
    try {
        debugger;
        dispatch({ type: types.LOGIN_REQUEST });
        const response = await services.mailPassLogin(email, password);
        if (response.success) {
            dispatch({ type: types.LOGIN_SUCCESS, payload: response });
            if (callback)
                callback(true);
        } else {
            dispatch({ type: types.LOGIN_FAILURE, payload: response });
            if (callback)
                callback(false);
        }
    } catch (err) {
        dispatch({ type: types.LOGIN_FAILURE, payload: err });
    }
}