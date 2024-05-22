import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import startupReducer from './slices/startUpSlice';
import resourceReducer from './slices/resourceSlice';
import mentorshipReducer from './slices/mentorshipSlice';
import investmentReducer from './slices/investmentSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        startups: startupReducer,
        resources: resourceReducer,
        mentorship: mentorshipReducer,
        investments: investmentReducer,
    },
});

export default store;