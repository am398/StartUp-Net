import { createSlice } from '@reduxjs/toolkit';
import API from '../../utils/api';

const initialState = {
    mentors: [],
    mentorships: [],
    error: null,
};

const mentorshipSlice = createSlice({
    name: 'mentorship',
    initialState,
    reducers: {
        fetchMentorsSuccess: (state, action) => {
            state.mentors = action.payload;
            state.error = null;
        },
        fetchMentorsFailure: (state, action) => {
            state.mentors = [];
            state.error = action.payload;
        },
        requestMentorshipSuccess: (state, action) => {
            state.mentorships.push(action.payload);
            state.error = null;
        },
        requestMentorshipFailure: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    fetchMentorsSuccess,
    fetchMentorsFailure,
    requestMentorshipSuccess,
    requestMentorshipFailure,
} = mentorshipSlice.actions;
export default mentorshipSlice.reducer;