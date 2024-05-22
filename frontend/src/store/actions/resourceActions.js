import API from '../../utils/api';

import { fetchResourcesSuccess, fetchResourcesFailure } from '../slices/resourceSlice';

export const fetchResources = () => async (dispatch) => {
    try {
        const response = await API.get('/resources');
        dispatch(fetchResourcesSuccess(response.data));
    } catch (error) {
        dispatch(fetchResourcesFailure(error.message));
    }
};