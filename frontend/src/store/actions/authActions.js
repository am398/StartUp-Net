import API from '../../utils/api';
import { loginSuccess, loginFailure } from '../slices/authSlice';

export const login = (email, password) => async (dispatch) => {
    try {
        const response = await API.post('/auth/login', { email, password });
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure(error.response.data.message));
    }
};