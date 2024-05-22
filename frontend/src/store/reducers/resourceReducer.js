const initialState = {
    resources: [],
    error: null,
};

const resourceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_RESOURCES_SUCCESS':
            return {
                ...state,
                resources: action.payload,
                error: null,
            };
        case 'FETCH_RESOURCES_FAILURE':
            return {
                ...state,
                resources: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default resourceReducer;