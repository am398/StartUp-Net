import API from '../../utils/api';

import { fetchStartupDetailsSuccess, fetchStartupDetailsFailure } from '../slices/startupSlice';

export const fetchStartupDetails = (id) => async (dispatch) => {
    try {
        const response = await API.get(`/startups/${id}`);
        dispatch(fetchStartupDetailsSuccess(response.data));
    } catch (error) {
        dispatch(fetchStartupDetailsFailure(error.message));
    }
};