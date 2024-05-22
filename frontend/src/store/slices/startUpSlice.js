// client/src/store/slices/startupSlice.js
import { createSlice } from '@reduxjs/toolkit';
import API from '../../utils/api';

const initialState = {
    userStartups: [],
    currentStartup: null,
    error: null,
};

const startupSlice = createSlice({
    name: 'startups',
    initialState,
    reducers: {
        fetchStartupDetailsSuccess: (state, action) => {
            state.currentStartup = action.payload;
            state.error = null;
        },
        fetchStartupDetailsFailure: (state, action) => {
            state.currentStartup = null;
            state.error = action.payload;
        },
    },
});

export const {
    fetchStartupDetailsSuccess,
    fetchStartupDetailsFailure,
} = startupSlice.actions;

export default startupSlice.reducer;
