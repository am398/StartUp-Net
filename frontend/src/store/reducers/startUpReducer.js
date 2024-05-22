const initialState = {
    userStartups: [],
    currentStartup: null,
    error: null,
};

const startupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_STARTUP_DETAILS_SUCCESS':
            return {
                ...state,
                currentStartup: action.payload,
                error: null,
            };
        case 'FETCH_STARTUP_DETAILS_FAILURE':
            return {
                ...state,
                currentStartup: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default startupReducer;