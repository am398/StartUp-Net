import { createSlice } from '@reduxjs/toolkit';
import API from '../../utils/api';

const initialState = {
    resources: [],
    error: null,
};

const resourceSlice = createSlice({
    name: 'resources',
    initialState,
    reducers: {
        fetchResourcesSuccess: (state, action) => {
            state.resources = action.payload;
            state.error = null;
        },
        fetchResourcesFailure: (state, action) => {
            state.resources = [];
            state.error = action.payload;
        },
    },
});

export const { fetchResourcesSuccess, fetchResourcesFailure } = resourceSlice.actions;
export default resourceSlice.reducer;