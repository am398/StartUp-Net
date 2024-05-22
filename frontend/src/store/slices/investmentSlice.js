import { createSlice } from '@reduxjs/toolkit';
import API from '../../utils/api';

const initialState = {
    opportunities: [],
    error: null,
};

const investmentSlice = createSlice({
    name: 'investments',
    initialState,
    reducers: {
        fetchInvestmentOpportunitiesSuccess: (state, action) => {
            state.opportunities = action.payload;
            state.error = null;
        },
        fetchInvestmentOpportunitiesFailure: (state, action) => {
            state.opportunities = [];
            state.error = action.payload;
        },
    },
});

export const {
    fetchInvestmentOpportunitiesSuccess,
    fetchInvestmentOpportunitiesFailure,
} = investmentSlice.actions;
export default investmentSlice.reducer;