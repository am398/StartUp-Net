import API from '../../utils/api';

import {
    fetchMentorsSuccess,
    fetchMentorsFailure,
    requestMentorshipSuccess,
    requestMentorshipFailure,
} from '../slices/mentorshipSlice';

export const fetchMentors = () => async (dispatch) => {
    try {
        const response = await API.get('/mentors');
        dispatch(fetchMentorsSuccess(response.data));
    } catch (error) {
        dispatch(fetchMentorsFailure(error.message));
    }
};

export const requestMentorship = (menteeId, mentorId) => async (dispatch) => {
    try {
        const response = await API.post('/mentorships', { menteeId, mentorId });
        dispatch(requestMentorshipSuccess(response.data));
    } catch (error) {
        dispatch(requestMentorshipFailure(error.message));
    }
};