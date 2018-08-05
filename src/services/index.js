import HTTP, { base_url, setToken } from './config';
import axios from 'axios';
import { userSafeUrl } from '../utils';


const errorMessages = {
    USER_INVALID: 'Usuario invalido',
    ERROR_LOGIN: 'Error al loguearse'
};

const GENERIC_ERROR_MESSAGE = 'Ha ocurrido un error';

const getMessage = message => {
    if (errorMessages[message]) {
        return errorMessages[message];
    } else {
        return message.length > 0 ? message : GENERIC_ERROR_MESSAGE;
    }
};

export const mailPassLogin = async (email, password) => {
    const body = {
        email,
        password
    }
    try {
        debugger;
        const response = await HTTP.post(`/auth/login`, body);
        debugger;
        if (response.status === 200 && response.data.success) {
            setToken(response.data.token);
            return {
                success: true,
                user: userSafeUrl(response.data.user),
                token: response.data.token
            };
        };
        return {
            success: false,
            errorMessage: response.data ? getMessage(response.data.message) : ''
        }
    } catch (err) {
        return {
            success: false,
            errorMessage: GENERIC_ERROR_MESSAGE
        }
    }
}
